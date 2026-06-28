# DATA_AUDIT.md

## Nguyên tắc

- Có dùng ảnh ngoài không: KHÔNG.
- Có dùng ảnh AI không: KHÔNG.
- Có dùng ảnh stock/placeholder/random không: KHÔNG.
- Có dữ liệu tự bịa không: KHÔNG.
- Website dùng dữ liệu từ 3 PDF và logo PNG người dùng cung cấp.
- Mỗi item public trong `src/data/` có `sourceFile`, `page`, `confidence`.

## Facebook

Không truy cập được Facebook, chỉ dùng ảnh/dữ liệu từ PDF.

Ghi chú kiểm tra: URL Facebook được cung cấp có phản hồi HTTP 200 và title HTML "Agency Marketing DST Group | Ha Long", nhưng nội dung trả về có dấu hiệu login shell. Không trích ảnh, bài đăng, dự án, dịch vụ hoặc thông tin nào từ Facebook vì không có dữ liệu public đủ rõ để dùng hợp lệ.

## PDF đã trích xuất

| File | Số trang trích xuất | Text | Ảnh render từ PDF |
|---|---:|---|---|
| `BAO GIA.pdf` | 28 | `work/pdf-text/bao-gia-page-*.txt` | `public/assets/pdf-images/bao-gia-page-*.png` |
| `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf` | 38 | `work/pdf-text/bao-gia-tt-su-kien-nha-hang-khach-san-page-*.txt` | `public/assets/pdf-images/bao-gia-tt-su-kien-nha-hang-khach-san-page-*.png` |
| `HSNL CTY DST.pdf` | 76 | `work/pdf-text/hsnl-cty-dst-page-*.txt` | `public/assets/pdf-images/hsnl-cty-dst-page-*.png` |

Tổng: 142 file text trang PDF và 142 ảnh render trang PDF.

## Ảnh dùng trong website

Website hiện dùng bộ ảnh WebP chất lượng cao trong `public/assets/showcase/`, được crop/resize từ ảnh render PDF. Bộ JPG cũ trong `public/assets/case-studies/` vẫn được giữ như asset trung gian/lịch sử, nhưng giao diện chính đã chuyển sang `showcase`.

| File | Nguồn | Trang | Kích thước output | Ghi chú |
|---|---|---:|---|---|
| `valley-beach-club-hero.webp` | `HSNL CTY DST.pdf` | 68 | 1800x1168 | Crop phần sân khấu ít chữ nhất; nguồn PDF chỉ rộng 1305px nên có upscale nhẹ |
| `cana-beer-showcase.webp` | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf` | 4 | 1920x984 | WebP quality 94 từ ảnh render PDF |
| `ho-co-tien-showcase.webp` | `HSNL CTY DST.pdf` | 70 | 1400x1150 | Nguồn PDF rộng 1305px nên crop phần rõ nhất và upscale nhẹ |
| `birds-nest-cafe-showcase.webp` | `HSNL CTY DST.pdf` | 70 | 1400x1150 | Nguồn PDF rộng 1305px nên crop phần rõ nhất và upscale nhẹ |
| `cabi-beach-showcase.webp` | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf` | 17 | 1920x1010 | WebP quality 94 từ ảnh render PDF |
| `grand-view-palace-showcase.webp` | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf` | 20 | 1800x1026 | WebP quality 94 từ ảnh render PDF |
| `diamond-palace-showcase.webp` | `HSNL CTY DST.pdf` | 71 | 1600x898 | Nguồn PDF rộng 1305px nên có upscale nhẹ |
| `service-collage-showcase.webp` | `HSNL CTY DST.pdf` | 8 | 1600x1132 | Nguồn PDF rộng 1305px nên có upscale nhẹ |

Script tạo bộ ảnh mới: `scripts/extract-high-quality-assets.js`.

Các ảnh dưới đây là bộ crop/resize ban đầu từ ảnh render PDF, lưu tại `public/assets/case-studies/`.

| File | Nguồn | Trang | Ghi chú |
|---|---|---:|---|
| `cana-beer-01.jpg` | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf` | 4 | Crop/resize từ slide dự án Cana Beer |
| `ho-co-tien-01.jpg` | `HSNL CTY DST.pdf` | 70 | Crop từ ảnh Nhà hàng Hồ Cô Tiên |
| `birds-nest-cafe-01.jpg` | `HSNL CTY DST.pdf` | 70 | Crop từ ảnh Bird's Nest Cafe |
| `cabi-beach-01.jpg` | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf` | 17 | Crop/resize từ slide Cabi Beach |
| `grand-view-palace-01.jpg` | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf` | 20 | Crop/resize từ slide Grand View Palace Ha Long Hotel |
| `valley-beach-club-01.jpg` | `HSNL CTY DST.pdf` | 68 | Crop từ ảnh sân khấu Valley Beach Club |
| `valley-beach-club-02.jpg` | `HSNL CTY DST.pdf` | 68 | Crop từ ảnh sự kiện Valley Beach Club |
| `client-grid-01.jpg` | `HSNL CTY DST.pdf` | 72 | Crop/resize từ slide khách hàng |
| `services-overview-01.jpg` | `HSNL CTY DST.pdf` | 8 | Crop/resize từ slide dịch vụ cung cấp |

Logo dùng từ file người dùng cung cấp:

- `LOGO DST .png` -> `public/assets/brand/dst-logo.png`
- `LOGO DST - Marketing - media.png` -> `public/assets/brand/dst-logo-marketing-media.png`

## Dữ liệu công ty

| Dữ liệu | Nguồn |
|---|---|
| Tên pháp lý, tên tiếng Anh, tên viết tắt, ngày thành lập, giấy phép kinh doanh, đại diện pháp luật, hotline, website, email, vốn điều lệ, trụ sở chính | `HSNL CTY DST.pdf`, trang 4 |
| Tagline "Dịch vụ tận tâm - Nâng tầm thương hiệu" | `HSNL CTY DST.pdf`, trang 5 |
| Mô tả đội ngũ nhân sự | `HSNL CTY DST.pdf`, trang 5 |
| Ban lãnh đạo: Nguyễn Hữu Quân, Vũ Văn Thương, Nguyễn Quốc Kham, Phan Thị Duyên | `HSNL CTY DST.pdf`, trang 5 |
| Địa chỉ trong báo giá: Số 2 - Ô 1 Ngõ 16 Cao Thắng - P. Hà Lầm - Quảng Ninh | `BAO GIA.pdf`, trang 1 |

## Dịch vụ đưa lên web

| Nhóm | Dữ liệu dùng | Nguồn |
|---|---|---|
| Toàn bộ dịch vụ công ty | ADS, TikTok, Design, Booking, Content, Studio, Setup Restaurant - Hotel, Branding, Media | `HSNL CTY DST.pdf`, trang 8 |
| ADS | Facebook, Google, YouTube | `HSNL CTY DST.pdf`, trang 12 |
| TikTok Shop Partner | TSP, xây kênh TikTok, xây gian hàng TikTok Shop, TikTok Ads | `HSNL CTY DST.pdf`, trang 14 và 18 |
| Design / Media / Marketing package | Website doanh nghiệp, landing page, logo, ấn phẩm, hồ sơ năng lực, video, chụp ảnh, TVC, quảng cáo | `HSNL CTY DST.pdf`, trang 10 và 26 |
| Barclub | Quản trị fanpage, content, poster, video, quảng cáo Facebook/TikTok/Google/Zalo | `BAO GIA.pdf`, trang 26-27 |
| Nhà hàng - khách sạn - sự kiện - coffee | Quản trị Facebook, TikTok/Reels, thiết kế đồ họa, quảng cáo online, website/SEO | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 36-37 |

## Dự án / khách hàng đưa lên web

| Dự án | Dịch vụ dùng trên web | Nguồn |
|---|---|---|
| Valley Beach Club | Quản trị Fanpage, viết content, thiết kế hình ảnh, chạy ADS; kết quả chỉ ghi theo PDF | `HSNL CTY DST.pdf`, trang 68-69 |
| Cana Beer | Xác nhận dự án và ảnh; không nêu chi tiết dịch vụ riêng | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 3-4 |
| Nhà hàng Hồ Cô Tiên | Chụp ảnh sản phẩm, quay clip review, xây dựng & quản trị Fanpage, thiết kế hình ảnh | `HSNL CTY DST.pdf`, trang 70 |
| Bird's Nest Cafe | Tư vấn truyền thông, xây dựng Fanpage, thiết kế logo, bộ nhận diện, banner, quảng cáo marketing online đa kênh | `HSNL CTY DST.pdf`, trang 70 |
| Cabi Beach | Xác nhận dự án và ảnh; không nêu chi tiết dịch vụ riêng | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 16-17 |
| Grand View Palace Ha Long Hotel | Xác nhận dự án và ảnh; không nêu chi tiết dịch vụ riêng | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 19-20 |
| Diamond Palace - Hạ Long | Tư vấn truyền thông, chạy ADS cho sự kiện triển lãm tiệc cưới | `HSNL CTY DST.pdf`, trang 71 |
| Nhà hàng Thiên Anh | Xác nhận dự án; không nêu chi tiết dịch vụ riêng | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 25 |
| Nhà hàng Thanh Thư | Xác nhận dự án; không nêu chi tiết dịch vụ riêng | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 31 |

## Báo giá / hạng mục dịch vụ

| Hạng mục | Giá hiển thị | Nguồn |
|---|---|---|
| Quản trị Facebook | Liên hệ tư vấn | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 36 |
| Chi phí quay, dựng TikTok/Reels | Liên hệ tư vấn | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 36 |
| Thiết kế poster/menu/video/recap | Liên hệ tư vấn | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 37 |
| Quảng cáo Facebook/TikTok/Google/Zalo | Phí dịch vụ 15% | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 37 |
| Website cơ bản, bài viết chuẩn SEO web | Liên hệ tư vấn | `Báo giá TT Sự kiện, Nhà hàng, khách sạn.pdf`, trang 37 |
| Gói đội Marketing 10.000.000 VNĐ | 10.000.000 VNĐ | `HSNL CTY DST.pdf`, trang 10 |
| Gói đội Marketing 20.000.000 VNĐ | 20.000.000 VNĐ | `HSNL CTY DST.pdf`, trang 10 |

## Dữ liệu không đủ chắc chắn nên không dùng hoặc chỉ dùng với ghi chú

- Email trong một số trang báo giá bị trích thành `NFO@DSTGROUP.VN`; không dùng dữ liệu đó làm nguồn email. Email public dùng từ `HSNL CTY DST.pdf`, trang 4: `info@dstgroup.vn`.
- Các trang dịch vụ `Booking`, `Studio`, `Branding`, `Setup Restaurant - Hotel`, `Dịch vụ Booking`, `Xây dựng phòng Marketing` có text layer ít hoặc chủ yếu là hình. Website chỉ dùng mức xác nhận nhóm dịch vụ, không bịa chi tiết.
- Các dự án Cana Beer, Cabi Beach, Grand View Palace Ha Long Hotel, Nhà hàng Thiên Anh, Nhà hàng Thanh Thư được PDF xác nhận tên/ảnh, nhưng không nêu rõ dịch vụ riêng. Website ghi rõ "chi tiết hạng mục chưa nêu rõ".
- Không dùng khách hàng/dự án ngoài danh sách xuất hiện trong PDF.
- Không dùng kết quả kinh doanh, số liệu tăng trưởng, KPI, ngân sách hoặc doanh thu nếu PDF không nêu.

## Kiểm tra kỹ thuật

- `npm install`: đã chạy thành công.
- `npm run build`: đã chạy thành công.
- `npm run lint`: đã chạy thành công.
- Đã quét project, loại trừ `node_modules` và `dist`, không thấy lorem ipsum, Unsplash, Pexels, placeholder image, ảnh stock hoặc dữ liệu fake.
