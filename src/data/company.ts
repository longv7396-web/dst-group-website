import type { SourceMeta } from "./sources";

type SourcedText = {
  value: string;
  source: SourceMeta;
};

const profileSource = {
  sourceFile: "HSNL CTY DST.pdf",
  page: 4,
  confidence: "high",
} as const;

export const company = {
  brandName: "DST Group",
  legalName: {
    value: "Công ty Cổ Phần Tập Đoàn DST",
    source: profileSource,
  } satisfies SourcedText,
  englishName: {
    value: "DST Group",
    source: profileSource,
  } satisfies SourcedText,
  shortName: {
    value: "Tập đoàn DST",
    source: profileSource,
  } satisfies SourcedText,
  tagline: {
    value: "Dịch vụ tận tâm - Nâng tầm thương hiệu",
    source: {
      sourceFile: "HSNL CTY DST.pdf",
      page: 5,
      confidence: "high",
    },
  } satisfies SourcedText,
  established: {
    value: "06/03/2020",
    source: profileSource,
  } satisfies SourcedText,
  businessLicense: {
    value: "5701747448 do Sở KH & ĐT Tỉnh Quảng Ninh cấp",
    source: profileSource,
  } satisfies SourcedText,
  representative: {
    value: "Ông Vũ Văn Thương - Tổng giám đốc",
    source: profileSource,
  } satisfies SourcedText,
  capital: {
    value: "10.000.000.000 VNĐ",
    source: profileSource,
  } satisfies SourcedText,
  phone: {
    value: "0328 247 888",
    source: profileSource,
  } satisfies SourcedText,
  email: {
    value: "info@dstgroup.vn",
    source: profileSource,
  } satisfies SourcedText,
  website: {
    value: "dstgroup.vn",
    source: profileSource,
  } satisfies SourcedText,
  websiteUrl: {
    value: "https://dstgroup.vn",
    source: profileSource,
  } satisfies SourcedText,
  fanpage: {
    value: "https://www.facebook.com/DSTGroup.vn/",
    source: profileSource,
  } satisfies SourcedText,
  zalo: {
    value: "https://zalo.me/0328247888",
    source: profileSource,
  } satisfies SourcedText,
  headquarters: {
    value:
      "7-9/1 Nguyễn An Ninh, Phường Yết Kiêu, Thành phố Hạ Long, Tỉnh Quảng Ninh, Việt Nam",
    source: profileSource,
  } satisfies SourcedText,
  quotationAddress: {
    value: "Số 2 - Ô 1 Ngõ 16 Cao Thắng - P. Hà Lầm - Quảng Ninh",
    source: {
      sourceFile: "BAO GIA.pdf",
      page: 1,
      confidence: "high",
    },
  } satisfies SourcedText,
  intro: {
    value:
      "DST Group sở hữu đội ngũ chuyên gia truyền thông và sáng tạo trẻ trung, nhiệt huyết, tận tâm với từng dự án; luôn đề cao trách nhiệm, tính hiệu quả và chuẩn mực nghề nghiệp cao nhất.",
    source: {
      sourceFile: "HSNL CTY DST.pdf",
      page: 5,
      confidence: "high",
    },
  } satisfies SourcedText,
  leadership: [
    {
      role: "Chủ tịch hội đồng quản trị",
      name: "Nguyễn Hữu Quân",
      source: { sourceFile: "HSNL CTY DST.pdf", page: 5, confidence: "high" },
    },
    {
      role: "Tổng giám đốc",
      name: "Vũ Văn Thương",
      source: { sourceFile: "HSNL CTY DST.pdf", page: 5, confidence: "high" },
    },
    {
      role: "Phó giám đốc",
      name: "Nguyễn Quốc Kham",
      source: { sourceFile: "HSNL CTY DST.pdf", page: 5, confidence: "high" },
    },
    {
      role: "Phó giám đốc điều hành",
      name: "Phan Thị Duyên",
      source: { sourceFile: "HSNL CTY DST.pdf", page: 5, confidence: "high" },
    },
  ],
} as const;
