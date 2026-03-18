# Phở Gà Ta Đà Nẵng - Landing Page

Dự án Landing Page tĩnh giới thiệu quán "Phở Gà Ta Chính Gốc Hà Nội" tại Đà Nẵng, kết hợp phong cách truyền thống Hà Nội với bối cảnh biển xanh miền Trung.

## Công nghệ sử dụng
- **HTML5:** Khung trang web.
- **CSS3 (Vanilla):** Giao diện "Wow", hỗ trợ Flexbox/Grid, biến môi trường (`:root`), hiệu ứng transition/animation, hoàn toàn thích ứng (Responsive) 100%. Không sử dụng Tailwind hay Bootstrap để tối ưu tốc độ.
- **JavaScript (Vanilla):** Cho menu hamburger (Mobile), render động danh sách món ăn từ mảng (Array) và xử lý form Đặt bàn/Mang về.

## Nét đặc trưng thiết kế
- **Màu sắc chính:** Trắng kem (`#FDFBF7`), Xanh dương nhạt biển khơi (`#A3C4D3`) và Đỏ gạch truyền thống (`#B22222`).
- **Typography:** Serif (`Playfair Display`) cho tính sang trọng ở tiêu đề; Sans-serif (`Roboto`) dễ đọc cho các đoạn văn bản.
- **Tính năng nổi bật:** Card hiệu ứng nổi, form submit giả lập (hiện popup không cần load lại trang), cuộn mượt (smooth scrolling), Menu hiển thị qua Javascript.

## Hướng dẫn cài đặt và chạy (Thực thi tĩnh)
Trang web này có thể chạy bằng cách mở file tĩnh hoặc dùng HTTP server nội bộ (Live Server, Python HTTP). Không cần môi trường Node.js.

### Tùy chọn 1: Mở trực tiếp trên trình duyệt
1. Clone hoặc tải thư mục mã nguồn `pho-ga-da-nang`.
2. Truy cập thư mục và double-click vào file `index.html`.
3. Trang web sẽ hiển thị ngay lập tức (Chỉ cần có mạng Internet để tải fonts và ảnh từ Unsplash).

### Tùy chọn 2: Sử dụng Live Server (Khuyên dùng)
Nếu sử dụng VS Code, bạn có thể cài đặt Extension **Live Server** và nhấn "Go Live" tại file `index.html`.

### Tùy chọn 3: Chạy dùng Python HTTP Server
Mở terminal/command prompt tại thư mục `pho-ga-da-nang` và gõ:
```bash
python -m http.server 8080
```
Truy cập `http://localhost:8080` trên trình duyệt để thưởng thức website.

## Cấu trúc thư mục
- `/css/style.css`: Nơi chứa toàn bộ mã style.
- `/js/main.js`: Code logic hiển thị thực đơn và form gửi đơn.
- `/assets`: Chứa hình ảnh tĩnh cục bộ như banner hero được AI tạo (`hero_pho_beach.png`).

---
<p align="right"><i>Thiết kế bởi Minh Đỗ</i></p>
