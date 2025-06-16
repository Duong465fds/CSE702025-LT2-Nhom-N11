// Quản lý điểm số

function addMark() {
  const id = document.getElementById('markStudentId').value;
  const subject = document.getElementById('subject').value;
  const mark = parseFloat(document.getElementById('mark').value);
  const marks = JSON.parse(localStorage.getItem('marks') || '[]');
  marks.push({ id, subject, mark });
  localStorage.setItem('marks', JSON.stringify(marks));
  alert('Thêm điểm thành công');
  showScores();
}

function showScores() {
  const marks = JSON.parse(localStorage.getItem('marks') || '[]');
  const div = document.getElementById('scoreList');
  if (!marks.length) {
    div.innerHTML = '<p>Chưa có dữ liệu điểm</p>';
    return;
  }
  div.innerHTML = '<h3>Danh sách điểm</h3><table border="1"><tr><th>Mã SV</th><th>Môn</th><th>Điểm</th></tr>' +
    marks.map(m => `<tr><td>${m.id}</td><td>${m.subject}</td><td>${m.mark}</td></tr>`).join('') +
    '</table>';
}

function showAverageScores() {
  const marks = JSON.parse(localStorage.getItem('marks') || '[]');
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  const scoreMap = {};
  marks.forEach(m => {
    if (!scoreMap[m.id]) scoreMap[m.id] = [];
    scoreMap[m.id].push(m.mark);
  });
  const div = document.getElementById('averageScores');
  div.innerHTML = '<h3>Điểm trung bình</h3><table border="1"><tr><th>Mã SV</th><th>Tên</th><th>Điểm TB</th></tr>' +
    students.map(s => {
      const avg = scoreMap[s.id] ? (scoreMap[s.id].reduce((a, b) => a + b, 0) / scoreMap[s.id].length).toFixed(2) : 'Chưa có điểm';
      return `<tr><td>${s.id}</td><td>${s.name}</td><td>${avg}</td></tr>`;
    }).join('') + '</table>';
}
