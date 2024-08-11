// File ini pehubung untuk UI dengan dan model user
// ini untuk addEventListener

// addTask.js

document.addEventListener("DOMContentLoaded", () => {
  // membuat data yang menampilkan tanggal task dibuat, berformat "yyyy-mm-dd"
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task(); // import dari class user

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // data yang dilempar ke 'Task.js'
    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
      taskCreated: `${year}-${month}-${day}`,
    };

    const result = taskManager.saveTask(taskData);

    if (result.success) {
      return (window.location.href = "./tasks.html");
      alert("Tersimpan!");
    } else {
      console.log("Proses Simpan Data Gagal");
    }
  });

});
