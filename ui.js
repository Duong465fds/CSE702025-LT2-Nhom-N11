// Xử lý giao diện (hiện/ẩn section)

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(div => div.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}
