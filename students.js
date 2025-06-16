// Quản lý sinh viên

function addStudent() {
  const id = document.getElementById('studentId').value;
  const name = document.getElementById('studentName').value;
  const cls = document.getElementById('studentClass').value;
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  students.push({ id, name, cls });
  localStorage.setItem('students', JSON.stringify(students));
  alert('Thêm sinh viên thành công');
  showStudents();
}

function editStudent(index) {
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  const student = students[index];
  const newName = prompt('Tên mới:', student.name);
  const newClass = prompt('Lớp mới:', student.cls);
  if (newName && newClass) {
    students[index].name = newName;
    students[index].cls = newClass;
    localStorage.setItem('students', JSON.stringify(students));
    alert('Cập nhật thành công');
    showStudents();
  }
}

function deleteStudent(index) {
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  if (confirm('Bạn có chắc muốn xóa sinh viên này?')) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    alert('Đã xóa');
    showStudents();
  }
}

function showStudents() {
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  const container = document.getElementById('studentList');
  container.innerHTML = '<h3>Danh sách sinh viên</h3><table border="1"><tr><th>Mã SV</th><th>Tên</th><th>Lớp</th><th>Hành động</th></tr>' +
    students.map((s, i) => `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.cls}</td>
    <td><button onclick="editStudent(${i})">Sửa</button> 
        <button onclick="deleteStudent(${i})">Xóa</button></td></tr>`).join('') +
    '</table>';
}
