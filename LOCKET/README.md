# Locket NDTT Module

> Shadowrocket module for unlocking **Locket Gold** on iOS  
> Module Shadowrocket mở khóa **Locket Gold** trên iOS  
>  
> Maintained by **NgDanhThanhTrung (NDTT)**

---

## 📌 Giới thiệu | Overview

**Locket NDTT Module** là module dành cho **Shadowrocket (iOS)**, sử dụng rewrite và script để chỉnh sửa phản hồi từ RevenueCat nhằm giả lập trạng thái thuê bao **Locket Gold**.

**Locket NDTT Module** is a Shadowrocket (iOS) module that modifies RevenueCat API responses to simulate an active **Locket Gold** subscription.

---

## ✨ Tính năng | Features

### 🇻🇳 Tiếng Việt
- Mở khóa **Locket Gold**
- Giả lập trạng thái thuê bao: `PURCHASED`
- Thời hạn đến năm **2999**
- Tự động nhận diện ứng dụng qua `User-Agent`
- Xóa header cache RevenueCat để tránh dữ liệu cũ
- Import là dùng, không cần công tắc

### 🇺🇸 English
- Unlock **Locket Gold**
- Fake subscription status: `PURCHASED`
- Expiration date set to **year 2999**
- Auto app detection via `User-Agent`
- Remove RevenueCat cache headers
- Plug & play, no toggle required

---

## 📦 Cấu trúc | File Structure

```text
.
├── Locket_NDTT.sgmodule   # Shadowrocket module
├── Locket_Gold.js         # RevenueCat response script
├── deleteHeader.js        # RevenueCat header cleaner
└── README.md
