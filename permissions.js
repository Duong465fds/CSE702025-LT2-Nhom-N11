//  Phân quyền người dùng

const permissions = {
  admin: [
    "Quản lý người dùng",
    "Quản lý danh mục Lớp, khoa, ngành học",
    "Quản lý môn học",
    "Quản lý điểm số",
    "Quản lý thông báo, lịch học, lịch thi",
    "Đăng nhập hệ thống",
    "Đăng ký tài khoản"
  ],
  student: [
    "Đăng nhập hệ thống",
    "Đăng ký tài khoản",
    "Tra cứu điểm, kết quả học tập",
    "Xem chi tiết lớp học, môn học",
    "Xem thông báo, lịch thi, lịch học"
  ],
  teacher: [
    "Quản lý điểm số sinh viên",
    "Cập nhật thông tin cá nhân",
    "Xem danh sách lớp, môn dạy"
  ]
};

function renderMenu(role) {
  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = "";
  if (permissions[role]) {
    permissions[role].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      menuContainer.appendChild(li);
    });
  }
}
