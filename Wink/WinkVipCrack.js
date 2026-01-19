/******************************
Chức năng: Wink Mở khóa tư cách thành viên vĩnh viễn
Người thực hiện: NgDanhThanhTrung
Phiên bản ứng dụng: 1.8.90
Thời gian cập nhật: 2024-11-07
*******************************/

// Lấy dữ liệu phản hồi từ server
let body = $response.body;
let obj = JSON.parse(body);

// Chỉnh sửa dữ liệu để kích hoạt VIP
obj.data = {
  "active_sub_type": 2,
  "account_type": 1,
  "sub_type_name": "续期", // Gia hạn
  "active_sub_order_id": "7069961436604422668",
  "trial_period_invalid_time": "",
  "current_order_invalid_time": "324955080000000",
  "active_order_id": "7069961436340181123",
  "limit_type": 0,
  "active_sub_type_name": "续期",
  "use_vip": true,
  "have_valid_contract": true,
  "derive_type_name": "普通会员", // Thành viên thường
  "derive_type": 1,
  "in_trial_period": false,
  "is_vip": true,
  "membership": {
    "id": "4",
    "display_name": "Wink会员", // Thành viên Wink
    "level": 1,
    "level_name": "普通会员"
  },
  "active_promotion_status_list": [2],
  "sub_type": 2,
  "account_id": "1230010086",
  "invalid_time": "324955295990000",
  "valid_time": "1569664800000",
  "active_product_id": "0",
  "active_promotion_status": 2,
  "show_renew_flag": true
};

// Trả về kết quả đã sửa đổi
$done({ body: JSON.stringify(obj) });
