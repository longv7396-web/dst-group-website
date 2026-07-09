/**
 * Convert travel inventory CSV exports (Google Sheets) into typed unit data.
 *
 * Usage:
 *   node scripts/convert-travel-csv.mjs
 *
 * Place updated exports in src/data/raw/*.csv then re-run.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const rawDir = join(root, "src", "data", "raw");
const outFile = join(root, "src", "data", "travelUnits.generated.ts");

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current.trim());
  return cells;
}

function readCsv(filename) {
  const text = readFileSync(join(rawDir, filename), "utf8");
  const physicalLines = text.split(/\r?\n/);
  const logicalLines = [];
  let buffer = "";

  for (const line of physicalLines) {
    buffer = buffer ? `${buffer}\n${line}` : line;
    const quoteCount = (buffer.match(/"/g) ?? []).length;
    if (quoteCount % 2 === 0) {
      logicalLines.push(buffer);
      buffer = "";
    }
  }
  if (buffer) logicalLines.push(buffer);

  return logicalLines.map(parseCsvLine);
}

function clean(value) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function isNumericPrice(value) {
  return /^\d+([.,]\d+)?$/.test(value);
}

function formatHolidayPrice(value) {
  const raw = clean(value);
  if (!raw) return undefined;
  if (raw.includes("/")) {
    const [price, suffix] = raw.split("/");
    if (isNumericPrice(price)) {
      return `${Number(price).toLocaleString("vi-VN")}.000đ/${suffix}`;
    }
  }
  if (isNumericPrice(raw)) {
    return `${Number(raw).toLocaleString("vi-VN")}.000đ/đêm`;
  }
  return raw;
}

function formatVillaPrice(value) {
  const raw = clean(value);
  if (!raw || raw.toLowerCase() === "full") return undefined;
  if (/tr/i.test(raw) || /đ/i.test(raw) || /inbox/i.test(raw) || /lẻ/i.test(raw) || /cặp/i.test(raw)) {
    return raw.replace(/\s+/g, " ");
  }
  if (isNumericPrice(raw)) {
    const num = Number(raw.replace(",", "."));
    if (num <= 30) {
      return `${num} triệu/đêm`;
    }
    return `${num.toLocaleString("vi-VN")}.000đ/đêm`;
  }
  return raw;
}

function parseBedrooms(value) {
  const raw = clean(value);
  if (!raw) return undefined;
  const match = raw.match(/(\d+)/);
  return match ? Number(match[1]) : undefined;
}

function parseElevator(value) {
  const raw = clean(value).toLowerCase();
  if (!raw) return undefined;
  if (raw.includes("có")) return true;
  if (raw.includes("không")) return false;
  return undefined;
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "vi"));
}

function summarizeHolidayPrices(units) {
  const groups = new Map();
  for (const unit of units) {
    const key = unit.unitType ?? "Khác";
    const entry = groups.get(key) ?? { weekday: [], weekend: [] };
    const weekdayNum = Number(clean(unit.weekdayPriceRaw));
    const weekendNum = Number(clean(unit.weekendPriceRaw));
    if (!Number.isNaN(weekdayNum)) entry.weekday.push(weekdayNum);
    if (!Number.isNaN(weekendNum)) entry.weekend.push(weekendNum);
    groups.set(key, entry);
  }

  return [...groups.entries()].map(([label, prices]) => ({
    label,
    weekday:
      prices.weekday.length > 0
        ? `Từ ${Math.min(...prices.weekday).toLocaleString("vi-VN")}.000đ/đêm`
        : undefined,
    weekend:
      prices.weekend.length > 0
        ? `Từ ${Math.min(...prices.weekend).toLocaleString("vi-VN")}.000đ/đêm`
        : undefined,
    note: "Giá tham khảo từ sheet Holiday Hạ Long",
  }));
}

function summarizeVillaPrices(units, note) {
  const groups = new Map();
  for (const unit of units) {
    const key = unit.bedrooms ? `${unit.bedrooms} PN` : "Villa";
    const entry = groups.get(key) ?? {
      weekday: [],
      friday: [],
      saturday: [],
      sunday: [],
    };
    const pushNum = (arr, raw) => {
      const value = clean(raw);
      if (!value || !isNumericPrice(value)) return;
      arr.push(Number(value.replace(",", ".")));
    };
    pushNum(entry.weekday, unit.weekdayPriceRaw);
    pushNum(entry.friday, unit.fridayPriceRaw);
    pushNum(entry.saturday, unit.saturdayPriceRaw);
    pushNum(entry.sunday, unit.sundayPriceRaw);
    groups.set(key, entry);
  }

  const formatRange = (values, suffix = "triệu/đêm") => {
    if (values.length === 0) return undefined;
    const min = Math.min(...values);
    const max = Math.max(...values);
    if (min === max) return `Từ ${min} ${suffix}`;
    return `Từ ${min}–${max} ${suffix}`;
  };

  return [...groups.entries()]
    .sort((a, b) => {
      const aNum = Number(a[0]);
      const bNum = Number(b[0]);
      if (!Number.isNaN(aNum) && !Number.isNaN(bNum)) return aNum - bNum;
      return a[0].localeCompare(b[0], "vi");
    })
    .map(([label, prices]) => ({
      label,
      weekday: formatRange(prices.weekday),
      friday: formatRange(prices.friday),
      saturday: formatRange(prices.saturday),
      sunday: formatRange(prices.sunday),
      note,
    }));
}

function collectAmenities(units) {
  const items = new Set();
  for (const unit of units) {
    for (const feature of unit.features ?? []) {
      feature
        .split(/[,;]/)
        .map((part) => clean(part))
        .filter((part) => part.length > 2)
        .forEach((part) => items.add(part));
    }
  }
  return [...items].slice(0, 12);
}

function parseHoliday() {
  const rows = readCsv("holiday-ha-long.csv");
  const headerIndex = rows.findIndex((row) => clean(row[1]) === "Mã Căn");
  const units = [];

  for (let i = headerIndex + 1; i < rows.length; i += 1) {
    const row = rows[i];
    const code = clean(row[1]);
    const unitType = clean(row[2]);
    if (!code || !unitType) continue;

    units.push({
      code,
      unitType,
      weekdayPriceRaw: clean(row[3]),
      weekendPriceRaw: clean(row[4]),
      weekdayPrice: formatHolidayPrice(row[3]),
      weekendPrice: formatHolidayPrice(row[4]),
    });
  }

  const unitTypeGroups = uniqueSorted(units.map((unit) => unit.unitType)).map((name) => ({
    name,
    description: `Có trong quỹ Holiday Hạ Long — liên hệ DST để check mã ${name} còn trống.`,
  }));

  return {
    unitSamples: units.map(({ weekdayPriceRaw, weekendPriceRaw, ...unit }) => unit),
    priceSummary: summarizeHolidayPrices(units),
    unitTypeGroups,
    amenities: collectAmenities(
      units.map((unit) => ({ features: [unit.unitType.replace(/studio/i, "Studio")] })),
    ),
    highlights: [
      `${units.length} mã căn trong quỹ Holiday Hạ Long (sheet tháng 7/2026)`,
      "Loại căn: Studio view phố, view biển, view bể bơi, 2 ngủ view biển",
      "Giá ngày thường và cuối tuần (T6–T7, T7–CN) khác nhau theo từng mã căn",
      "DST hỗ trợ check lịch trống và báo giá theo ngày cụ thể",
    ],
    dataSource: "Google Sheet Holiday Hạ Long — export CSV tháng 7/2026",
    unitCount: units.length,
  };
}

function parseTuanChau() {
  const rows = readCsv("villa-tuan-chau.csv");
  const headerIndex = rows.findIndex((row) => /tên-?\s*mã căn/i.test(clean(row[1])));
  const units = [];

  for (let i = headerIndex + 1; i < rows.length; i += 1) {
    const row = rows[i];
    const code = clean(row[1]);
    if (!code || /^lưu ý/i.test(code)) continue;

    const features = clean(row[4]) || clean(row[row.length - 1]);
    if (!features && !row[5]) continue;

    units.push({
      code,
      bedrooms: parseBedrooms(row[2]),
      bedroomsLabel: clean(row[2]),
      features: features ? [features] : undefined,
      weekdayPriceRaw: clean(row[5]),
      sundayPriceRaw: clean(row[6]),
      fridayPriceRaw: clean(row[7]),
      saturdayPriceRaw: clean(row[8]),
      weekdayPrice: formatVillaPrice(row[5]),
      sundayPrice: formatVillaPrice(row[6]),
      fridayPrice: formatVillaPrice(row[7]),
      saturdayPrice: formatVillaPrice(row[8]),
    });
  }

  return {
    unitSamples: units.map(
      ({ weekdayPriceRaw, sundayPriceRaw, fridayPriceRaw, saturdayPriceRaw, bedroomsLabel, ...unit }) => unit,
    ),
    priceSummary: summarizeVillaPrices(units, "Giá tham khảo từ sheet Villa Tuần Châu"),
    amenities: collectAmenities(units),
    highlights: [
      `${units.length} villa tiêu biểu tại Tuần Châu (dữ liệu sheet tháng 7/2026)`,
      "Tiện ích thực tế: mặt biển, view panorama, sân vườn, bàn bi-a",
      "Giá theo ngày thường, thứ 6, thứ 7 và chủ nhật — một số căn bán cặp cuối tuần",
      "Nhấn liên hệ DST để xem ảnh và thông tin chi tiết từng villa",
    ],
    dataSource: "Google Sheet Villa Tuần Châu — export CSV tháng 7/2026",
    unitCount: units.length,
  };
}

function parseSunFeria() {
  const rows = readCsv("villa-sun-feria.csv");
  const headerIndex = rows.findIndex((row) => /link mã thông tin/i.test(clean(row[1])));
  const units = [];

  for (let i = headerIndex + 1; i < rows.length; i += 1) {
    const row = rows[i];
    const code = clean(row[1]);
    if (!code || /^lưu ý/i.test(code) || /^villa hot/i.test(code)) continue;
    if (!row[2] && !row[4] && !row[5]) continue;

    const features = clean(row[4]) || clean(row[row.length - 2]);
    units.push({
      code,
      bedrooms: parseBedrooms(row[2]),
      bedroomsLabel: clean(row[2]),
      features: features ? [features] : undefined,
      weekdayPriceRaw: clean(row[5]),
      sundayPriceRaw: clean(row[6]),
      fridayPriceRaw: clean(row[7]),
      saturdayPriceRaw: clean(row[8]),
      elevator: parseElevator(row[row.length - 1]),
      weekdayPrice: formatVillaPrice(row[5]),
      sundayPrice: formatVillaPrice(row[6]),
      fridayPrice: formatVillaPrice(row[7]),
      saturdayPrice: formatVillaPrice(row[8]),
    });
  }

  return {
    unitSamples: units.map(
      ({
        weekdayPriceRaw,
        sundayPriceRaw,
        fridayPriceRaw,
        saturdayPriceRaw,
        bedroomsLabel,
        ...unit
      }) => unit,
    ),
    priceSummary: summarizeVillaPrices(units, "Giá tham khảo từ sheet Villa Sun Feria"),
    amenities: collectAmenities(units),
    highlights: [
      `${units.length} mã villa trong quỹ Sun Feria (sheet tháng 7/2026)`,
      "Lọc theo số phòng ngủ — nhiều căn có bể bơi riêng, karaoke, bàn bi-a",
      "Một số villa có thang máy; giá cuối tuần nhiều căn bán theo cặp 2 đêm",
      "Liên hệ DST để nhận ảnh và tư vấn villa phù hợp nhóm",
    ],
    dataSource: "Google Sheet Villa Sun Feria — export CSV tháng 7/2026",
    unitCount: units.length,
  };
}

function parseFlc() {
  const rows = readCsv("villa-flc.csv");
  const headerIndex = rows.findIndex((row) => clean(row[1]) === "Mã Căn");
  const units = [];

  for (let i = headerIndex + 1; i < rows.length; i += 1) {
    const row = rows[i];
    const code = clean(row[1]);
    if (!code) continue;

    const features = clean(row[4]) || clean(row[row.length - 1]);
    units.push({
      code,
      bedrooms: parseBedrooms(row[2]),
      bedroomsLabel: clean(row[2]),
      features: features ? [features] : undefined,
      weekdayPriceRaw: clean(row[5]),
      fridayPriceRaw: clean(row[6]),
      saturdayPriceRaw: clean(row[7]),
      sundayPriceRaw: clean(row[8]),
      weekdayPrice: formatVillaPrice(row[5]),
      fridayPrice: formatVillaPrice(row[6]),
      saturdayPrice: formatVillaPrice(row[7]),
      sundayPrice: formatVillaPrice(row[8]),
    });
  }

  return {
    unitSamples: units.map(
      ({ weekdayPriceRaw, fridayPriceRaw, saturdayPriceRaw, sundayPriceRaw, bedroomsLabel, ...unit }) => unit,
    ),
    priceSummary: summarizeVillaPrices(units, "Giá tham khảo từ sheet Villa FLC"),
    amenities: collectAmenities(units),
    highlights: [
      `${units.length} mã villa FLC Hạ Long (sheet tháng 07/2026)`,
      "View vịnh, view golf, karaoke, bi-a, sân vườn theo từng mã căn",
      "Giá T6/T7/CN cập nhật riêng — nhiều căn cuối tuần bán cặp",
      "Liên hệ DST để check giá và lịch trống theo ngày",
    ],
    dataSource: "Google Sheet Villa FLC — export CSV tháng 07/2026",
    unitCount: units.length,
  };
}

const generated = {
  "holiday-ha-long": parseHoliday(),
  "villa-tuan-chau": parseTuanChau(),
  "villa-sun-feria": parseSunFeria(),
  "villa-flc": parseFlc(),
};

const summary = Object.entries(generated)
  .map(([slug, data]) => `${slug}: ${data.unitCount} units`)
  .join(", ");

const fileContents = `/* eslint-disable */
// AUTO-GENERATED by scripts/convert-travel-csv.mjs — do not edit by hand.
// Re-export sheet CSV from src/data/raw/ and run: npm run travel:import

export const generatedTravelUnits = ${JSON.stringify(generated, null, 2)};
`;

writeFileSync(outFile, fileContents, "utf8");
console.log(`Wrote ${outFile}`);
console.log(summary);
