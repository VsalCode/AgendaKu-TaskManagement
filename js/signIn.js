// File ini pehubung untuk UI dengan dan model user
// ini untuk addEventListener

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User(); // import dari class user

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      // simpan di local storage buat mengetahui siapa yang login 
      localStorage.setItem("usernameAccount", usernameByInput);
      // direct halaman tasks
      return (window.location.href = "./tasks.html");
    } else {
      alert("akun anda tidak ditemukan");
    }
  });
});
