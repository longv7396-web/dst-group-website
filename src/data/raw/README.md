# Nguồn dữ liệu sản phẩm du lịch (CSV)

Export Google Sheet về CSV UTF-8 và đặt tại đây:

| File | Nguồn |
|------|--------|
| `holiday-ha-long.csv` | [Holiday Hạ Long](https://docs.google.com/spreadsheets/d/16n3Vlf8JBju7F6IUZ5hDG3FXobzWoAHdwaSMt8fo90o/edit) |
| `villa-tuan-chau.csv` | [Villa Tuần Châu](https://docs.google.com/spreadsheets/d/1-l6n2b_15o7W_hGA4x6Yafjh-y-MDkV0_vJ69O215Jk/edit) |
| `villa-sun-feria.csv` | [Villa Sun Feria](https://docs.google.com/spreadsheets/d/1t8NbFrPOQCwUbZoZXzPZG1vn3Lg0zMEBcApCLC2PtZk/edit) |
| `villa-flc.csv` | [Villa FLC](https://docs.google.com/spreadsheets/d/17vMB4D28yKHaEfJ9-3lC3gVSogWPWyTlvXLJ4uJoP2I/edit) |

## Cập nhật dữ liệu

1. Trong Google Sheet: **File → Download → Comma Separated Values (.csv)**
2. Ghi đè file tương ứng trong thư mục này.
3. Chạy:

```bash
npm run travel:import
npm run build
```

Script `scripts/convert-travel-csv.mjs` sẽ đọc CSV và sinh `src/data/travelUnits.generated.ts`.

**Lưu ý:** Link ảnh/thông tin trong sheet thường là hyperlink nội bộ (không public) — website không hiển thị link sheet; khách liên hệ DST để nhận ảnh và giá chính xác theo ngày.
