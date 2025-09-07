# Hướng dẫn Deploy Portfolio

Dự án: ReactJS Portfolio (tiếng Nhật)

## 1) Deploy lên GitHub Pages (khuyên dùng)

### Cách A: GitHub Actions (tự động build & deploy)
1. Bật Pages
   - Settings → Pages → Build and deployment → Source: GitHub Actions
2. Workflow đã có sẵn tại `.github/workflows/pages.yml` với nội dung:
   - Build bằng `npm ci && npm run build`
   - Upload thư mục `build` và deploy lên Pages
3. Mỗi lần push lên nhánh `main` sẽ tự deploy.
4. URL: `https://<username>.github.io/<repository>`

Lưu ý Router:
- Nếu dùng BrowserRouter, GitHub Pages đôi lúc 404 khi refresh; workflow Actions đã khắc phục bằng xuất thẳng `build`.
- Có thể dùng `HashRouter` nếu cần đơn giản.

### Cách B: gh-pages (dùng lệnh thủ công)
1. Cài package: `npm i -D gh-pages`
2. Trong `package.json` thêm:
   - `"homepage": "https://<username>.github.io/<repository>"`
   - Scripts:
     - `"predeploy": "npm run build"`
     - `"deploy": "gh-pages -d build"`
3. Chạy: `npm run deploy`
4. Vào Settings → Pages → chọn nguồn `gh-pages` branch nếu cần.

---

## 2) Deploy lên Firebase Hosting

Yêu cầu: có Firebase project (ví dụ: `lequang-huy-portfolio`).

File cấu hình đã có sẵn:
- `firebase.json`
- `.firebaserc` (đã đặt `default` = project của bạn)

Các bước:
1. Cài CLI và đăng nhập
```bash
npm i -g firebase-tools
firebase login
```
2. Kiểm tra project đang dùng (tùy chọn)
```bash
firebase use --add   # nếu muốn chọn thủ công
```
3. Build và deploy từ thư mục dự án
```bash
npm run build
firebase deploy --only hosting --project lequang-huy-portfolio
```

Cấu hình SPA:
- `firebase.json` đã có `rewrites` đưa mọi đường dẫn về `/index.html` để hỗ trợ React Router.

Gỡ lỗi nhanh:
- Lỗi "firebase use must be run from a Firebase project directory": đảm bảo đang ở thư mục dự án, nơi có `firebase.json` và `.firebaserc`.
- 404 khi refresh trên Pages: cân nhắc dùng `HashRouter` hoặc tiếp tục dùng Actions.

---

## 3) Lệnh hữu ích
```bash
# Cài dependencies
npm ci

# Chạy dev
npm start

# Build production
npm run build
```

## 4) Remotes hiện tại
- GitHub (portfolio): `https://github.com/huyuit1909/huy_portfolio`
- GitHub (introducemyself): `https://github.com/huyuit1909/introducemyself`

Đẩy code:
```bash
git push -u portfolio main   # repo chính để public
# hoặc
git push -u origin main
```
