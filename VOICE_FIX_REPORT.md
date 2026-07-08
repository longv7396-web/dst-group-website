# VOICE_FIX_REPORT.md

## Các câu đã sửa khỏi giao diện khách hàng

| File đã sửa | Câu cũ | Câu mới | Lý do sửa |
|---|---|---|---|
| `src/App.tsx` | Live operation map | Các hạng mục triển khai | Bỏ cảm giác dashboard ảo, dùng tiếng Việt rõ hơn. |
| `src/App.tsx` | DST Command Center | Kế hoạch đang làm | Bỏ cụm tiếng Anh không phải tính năng thật. |
| `src/App.tsx` | Content Calendar | Kế hoạch nội dung | Dùng từ khách hàng dễ hiểu. |
| `src/App.tsx` | Media Assets | Tư liệu hình ảnh | Dùng từ khách hàng dễ hiểu. |
| `src/App.tsx` | Booking Plan | Lịch sự kiện / booking | Dùng từ khách hàng dễ hiểu. |
| `src/App.tsx` | Một đội ngũ làm hình ảnh số cho thương hiệu dịch vụ | DST hỗ trợ website, nội dung, hình ảnh và quảng cáo | Nói thẳng DST làm gì, bớt câu template. |
| `src/App.tsx` | Mỗi ngành có nhịp truyền thông riêng. DST triển khai theo đúng ngữ cảnh đó. | Mỗi nhóm khách cần cách làm khác nhau | Bỏ câu template, viết ngắn hơn. |
| `src/App.tsx` | Dự án thật | Dự án đã thực hiện | Không dùng chữ "thật" để tự thanh minh. |
| `src/App.tsx` | Một số hình ảnh được trích từ hồ sơ năng lực và báo giá DST đã cung cấp. | Bỏ dòng mô tả | Không để nội dung nguồn/audit trên UI. |
| `src/App.tsx` | Dự án thật cho thấy DST xử lý nhiều kiểu bài toán truyền thông | Một số dự án DST từng triển khai cho khách hàng | Bỏ câu quảng cáo và suy diễn. |
| `src/App.tsx` | Mỗi dự án cho thấy một nhu cầu khác nhau... | Mỗi khách hàng có nhu cầu khác nhau. DST tư vấn hạng mục theo từng trường hợp. | Viết lại như tư vấn thật. |
| `src/App.tsx` | Sẵn sàng tăng trưởng cùng DST Group? | Cần tư vấn website, content hoặc quảng cáo? | Bỏ claim tăng trưởng. |
| `src/App.tsx` | Hãy biến kênh truyền thông thành một hệ thống vận hành rõ ràng hơn | DST xem nhu cầu trước rồi đề xuất cách triển khai phù hợp | Bỏ câu template. |
| `src/App.tsx` | Nội dung được xây dựng từ hồ sơ năng lực và bảng báo giá nội bộ DST Group. | Xóa khỏi footer | Không hiển thị chữ "nội bộ" trên giao diện. |
| `src/pages/ServicesPage.tsx` | Nội dung bên dưới được ghi theo hồ sơ năng lực và báo giá DST. | Chọn nhóm dịch vụ phù hợp với nhu cầu hiện tại của bạn. | Bỏ ghi chú nguồn khỏi UI. |
| `src/pages/ServicesPage.tsx` | Một số hình ảnh/dự án trong hồ sơ DST | Một số hình ảnh/dự án DST đã triển khai | Bỏ câu tự thanh minh nguồn. |
| `src/pages/ServicesPage.tsx` | Một số hình ảnh được trích từ hồ sơ năng lực và báo giá DST đã cung cấp. | Bỏ dòng mô tả | Không để nguồn/audit trên UI. |
| `src/pages/BarClubPage.tsx` | Một số hình ảnh/dự án đã có trong hồ sơ DST | Một số hình ảnh/dự án DST đã triển khai | Bỏ câu tự thanh minh nguồn. |
| `src/pages/HospitalityPage.tsx` | Một số hình ảnh/dự án trong hồ sơ DST | Một số hình ảnh/dự án DST đã triển khai | Bỏ câu tự thanh minh nguồn. |
| `src/data/projects.ts` | Dự án xuất hiện trong hồ sơ DST. Tài liệu có ghi... | DST đã thực hiện fanpage, content, thiết kế hình ảnh và ads cho dự án này. | Bỏ ngôn ngữ audit khỏi card dự án. |
| `src/data/projects.ts` | Tài liệu xác nhận tên và hình ảnh dự án. | Một số hình ảnh của dự án... | Bỏ ngôn ngữ audit khỏi card dự án. |
| `src/data/barClubData.ts` | Dự án có trong hồ sơ DST | Hình ảnh/dự án tham khảo | Bỏ ngôn ngữ audit khỏi UI. |

## Kiểm tra nội dung

- Đã quét UI text trong `src/App.tsx`, `src/pages`, `src/data`.
- Các cụm như `Dự án thật`, `hồ sơ năng lực`, `bảng báo giá nội bộ`, `Command Center`, `Live operation map`, `Sẵn sàng tăng trưởng`, `chưa ghi giá` không còn trong UI text.
- Metadata nguồn như `sourceFile` và `confidence` vẫn còn trong data object để phục vụ audit, nhưng không render ra giao diện khách hàng.
