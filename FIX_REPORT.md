# FIX_REPORT.md

## 1. Nội dung đã xóa hoặc sửa vì chưa đủ nguồn

| Nội dung cũ | Cách xử lý | Lý do |
|---|---|---|
| `Event Launch Pack` | Đổi thành "Hạng mục truyền thông cho event" | Không thấy tên gói này như tên chính thức trong dữ liệu audit. |
| `Monthly Content Pack` | Đổi thành "Nội dung duy trì hằng tháng" | Tránh trình bày như gói chính thức. |
| `Full Nightlife Media Pack` | Đổi thành "Hướng triển khai cho Bar/Club" | Tránh tạo cảm giác tự đặt gói. |
| "Chưa ghi giá khi chưa có báo giá cụ thể..." | Đổi thành câu tư vấn chi phí theo quy mô và hạng mục | Không để ghi chú nội bộ trên UI. |
| "Ảnh và dự án được lấy từ tài liệu thật..." | Đổi thành "Một số hình ảnh được trích từ hồ sơ năng lực và báo giá DST đã cung cấp." | Câu mới khách hàng đọc được tự nhiên hơn. |
| Các mô tả kiểu "dự án cần visual..." | Đổi thành mô tả trung tính theo PDF | Không suy diễn nhu cầu của từng dự án nếu PDF không ghi. |

## 2. Dự án đã sửa

| Dự án | File | Cách sửa |
|---|---|---|
| Valley Beach Club | `src/data/projects.ts`, `src/data/barClubData.ts` | Giữ hạng mục có trong hồ sơ DST; bỏ câu outcome không có số liệu. |
| Cana Beer | `src/data/projects.ts`, `src/data/barClubData.ts` | Chỉ ghi dự án xuất hiện trong báo giá và có hình ảnh. |
| Nhà hàng Hồ Cô Tiên | `src/data/projects.ts` | Ghi đúng các hạng mục có trong hồ sơ DST. |
| Bird's Nest Cafe | `src/data/projects.ts` | Ghi đúng các hạng mục có trong hồ sơ DST. |
| Cabi Beach | `src/data/projects.ts` | Chỉ ghi dự án xuất hiện trong báo giá và có hình ảnh. |
| Grand View Palace Ha Long Hotel | `src/data/projects.ts` | Chỉ ghi dự án xuất hiện trong báo giá và có hình ảnh. |
| Diamond Palace - Hạ Long | `src/data/projects.ts` | Ghi đúng tư vấn truyền thông và ads cho sự kiện. |
| Nhà hàng Thiên Anh | `src/data/projects.ts` | Chỉ ghi dự án xuất hiện trong báo giá. |
| Nhà hàng Thanh Thư | `src/data/projects.ts` | Chỉ ghi dự án xuất hiện trong báo giá. |

## 3. Ảnh

- Không thay ảnh.
- Không sửa video.
- Không sửa `public/assets/videos`.
- Alt ảnh dự án trên các landing page đã đổi sang dạng có nguồn PDF và số trang.

## 4. Mục cần bổ sung dữ liệu thật nếu muốn viết sâu hơn

- Chi tiết hạng mục riêng cho Cana Beer.
- Chi tiết hạng mục riêng cho Cabi Beach.
- Chi tiết hạng mục riêng cho Grand View Palace Ha Long Hotel.
- Chi tiết hạng mục riêng cho Nhà hàng Thiên Anh.
- Chi tiết hạng mục riêng cho Nhà hàng Thanh Thư.
- Báo giá chính thức cho các hạng mục Bar/Club theo event hoặc theo tháng.
- Link Zalo Official Account nếu DST có OA chính thức.
