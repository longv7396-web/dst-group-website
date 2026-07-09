import { useMemo, useState } from "react";
import type { TravelProject } from "../../data/travelProjects";

type ProjectUnitTableProps = {
  project: TravelProject;
};

const ALL_BEDROOMS = "all";
const MAX_REPRESENTATIVE_UNITS = 6;

function formatUnitText(text: string): string {
  return text
    .replace(/\bBi a\b/gi, "Bàn bi-a")
    .replace(/\bBi-A\b/gi, "Bàn bi-a")
    .replace(/\bBi A\b/g, "Bàn bi-a");
}

export function ProjectUnitTable({ project }: ProjectUnitTableProps) {
  const bedroomOptions = useMemo(() => {
    if (!project.bedroomFilter) return [];
    const values = new Set(
      project.unitSamples
        .map((unit) => unit.bedrooms)
        .filter((value): value is number => typeof value === "number"),
    );
    return Array.from(values).sort((a, b) => a - b);
  }, [project]);

  const [bedroomFilter, setBedroomFilter] = useState<string>(ALL_BEDROOMS);

  const filteredUnits = useMemo(() => {
    if (!project.bedroomFilter || bedroomFilter === ALL_BEDROOMS) {
      return project.unitSamples;
    }
    const bedrooms = Number(bedroomFilter);
    return project.unitSamples.filter((unit) => unit.bedrooms === bedrooms);
  }, [bedroomFilter, project]);

  const representativeUnits = useMemo(
    () => filteredUnits.slice(0, MAX_REPRESENTATIVE_UNITS),
    [filteredUnits],
  );

  const hasWeekdayWeekend = project.unitSamples.some((unit) => unit.weekdayPrice && unit.weekendPrice);
  const hasMultiDayPricing = project.unitSamples.some(
    (unit) => unit.fridayPrice || unit.saturdayPrice || unit.sundayPrice,
  );

  return (
    <div className="travel-unit-table-wrap">
      {project.bedroomFilter && bedroomOptions.length > 0 ? (
        <div className="travel-bedroom-filter" role="group" aria-label="Lọc theo số phòng ngủ">
          <button
            type="button"
            className={bedroomFilter === ALL_BEDROOMS ? "is-active" : ""}
            onClick={() => setBedroomFilter(ALL_BEDROOMS)}
          >
            Tất cả
          </button>
          {bedroomOptions.map((bedrooms) => (
            <button
              key={bedrooms}
              type="button"
              className={bedroomFilter === String(bedrooms) ? "is-active" : ""}
              onClick={() => setBedroomFilter(String(bedrooms))}
            >
              {bedrooms} PN
            </button>
          ))}
        </div>
      ) : null}

      <div className="travel-unit-table-desktop" role="region" aria-label="Bảng căn tiêu biểu">
        <table>
          <thead>
            <tr>
              <th>Mã căn</th>
              {project.unitTypeGroups || project.unitSamples.some((u) => u.unitType) ? <th>Loại</th> : null}
              {project.unitSamples.some((u) => u.bedrooms) ? <th>Số PN</th> : null}
              {project.unitSamples.some((u) => u.features?.length) ? <th>Tiện ích</th> : null}
              {hasWeekdayWeekend ? (
                <>
                  <th>Ngày thường</th>
                  <th>Cuối tuần</th>
                </>
              ) : null}
              {hasMultiDayPricing ? (
                <>
                  <th>T2–T5</th>
                  <th>T6</th>
                  <th>T7</th>
                  <th>CN</th>
                </>
              ) : null}
              {project.unitSamples.some((u) => u.elevator) ? <th>Thang máy</th> : null}
            </tr>
          </thead>
          <tbody>
            {representativeUnits.map((unit) => (
              <tr key={unit.code}>
                <td className="font-bold text-white">{unit.code}</td>
                {project.unitTypeGroups || project.unitSamples.some((u) => u.unitType) ? (
                  <td>{unit.unitType ?? "—"}</td>
                ) : null}
                {project.unitSamples.some((u) => u.bedrooms) ? <td>{unit.bedrooms ?? "—"}</td> : null}
                {project.unitSamples.some((u) => u.features?.length) ? (
                  <td>{unit.features?.map(formatUnitText).join(", ") ?? "—"}</td>
                ) : null}
                {hasWeekdayWeekend ? (
                  <>
                    <td>{unit.weekdayPrice ?? "—"}</td>
                    <td>{unit.weekendPrice ?? "—"}</td>
                  </>
                ) : null}
                {hasMultiDayPricing ? (
                  <>
                    <td>{unit.weekdayPrice ?? "—"}</td>
                    <td>{unit.fridayPrice ?? "—"}</td>
                    <td>{unit.saturdayPrice ?? "—"}</td>
                    <td>{unit.sundayPrice ?? "—"}</td>
                  </>
                ) : null}
                {project.unitSamples.some((u) => u.elevator) ? <td>{unit.elevator ? "Có" : "—"}</td> : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="travel-unit-cards-mobile" aria-label="Danh sách căn tiêu biểu">
        {representativeUnits.map((unit) => (
          <article key={unit.code} className="travel-unit-card">
            <div className="travel-unit-card-head">
              <h4>{unit.code}</h4>
              {unit.unitType ? <span>{unit.unitType}</span> : null}
              {unit.bedrooms ? <span>{unit.bedrooms} PN</span> : null}
            </div>
            {unit.features?.length ? (
              <p className="travel-unit-card-features">{unit.features.map(formatUnitText).join(" · ")}</p>
            ) : null}
            <dl className="travel-unit-card-prices">
              {unit.weekdayPrice ? (
                <div>
                  <dt>Ngày thường</dt>
                  <dd>{unit.weekdayPrice}</dd>
                </div>
              ) : null}
              {unit.weekendPrice ? (
                <div>
                  <dt>Cuối tuần</dt>
                  <dd>{unit.weekendPrice}</dd>
                </div>
              ) : null}
              {unit.fridayPrice ? (
                <div>
                  <dt>Thứ 6</dt>
                  <dd>{unit.fridayPrice}</dd>
                </div>
              ) : null}
              {unit.saturdayPrice ? (
                <div>
                  <dt>Thứ 7</dt>
                  <dd>{unit.saturdayPrice}</dd>
                </div>
              ) : null}
              {unit.sundayPrice ? (
                <div>
                  <dt>Chủ nhật</dt>
                  <dd>{unit.sundayPrice}</dd>
                </div>
              ) : null}
              {unit.elevator ? (
                <div>
                  <dt>Thang máy</dt>
                  <dd>Có</dd>
                </div>
              ) : null}
            </dl>
            {unit.notes ? <p className="travel-unit-card-note">{formatUnitText(unit.notes)}</p> : null}
          </article>
        ))}
      </div>

      <p className="travel-price-disclaimer">
        Hiển thị {representativeUnits.length} mã căn tiêu biểu
        {filteredUnits.length > representativeUnits.length ? ` / ${filteredUnits.length} mã phù hợp.` : "."} {project.contactNote}
      </p>
    </div>
  );
}
