// Xử lý đăng ký, đăng nhập, đăng xuất
function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const role = document.getElementById('register-role').value;

  if (username && password && role) {
    // Lưu thông tin người dùng với cả mật khẩu và vai trò
    const userData = { password, role };
    localStorage.setItem('user_' + username, JSON.stringify(userData));
    alert('Đăng ký thành công');
    window.location.href = 'login.html';
  } else {
    alert('Vui lòng nhập đầy đủ thông tin');
  }
}


function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const role = document.getElementById('login-role').value;

  const storedPassword = localStorage.getItem('user_' + username);
  const storedRole = localStorage.getItem('role_' + username);

  if (storedPassword === password && storedRole === role) {
    localStorage.setItem('loggedInUser', username);
    localStorage.setItem('loggedInRole', role);
    window.location.href = 'index.html';
  } else {
    alert('Sai tên đăng nhập, mật khẩu hoặc vai trò');
  }
}


function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
}

function checkLogin() {
  const user = localStorage.getItem('loggedInUser');
  if (!user) {
    alert('Vui lòng đăng nhập trước');
    window.location.href = 'login.html';
  } else {
    document.getElementById('userDisplay').innerText = user;
    showScores();
  }
}
