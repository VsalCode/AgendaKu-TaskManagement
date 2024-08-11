// File ini pehubung untuk UI dengan dan model user
// ini untuk addEventListener

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User(); // import dari class user

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      username: document.getElementById("username").value,
    };

    const result = userManager.saveUser(userData);

    if (result.success) {
      return (window.location.href = "./index.html");
    } else {
      console.log("Proses Simpan Data Gagal");
    }
  });
});
