// File ini untuk bussiness logic
// File ini digunakan untuk mengelola data CRUD

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    // parameter userData didapat dr file "addUser"
    const newUser = {
      id: Date.now(), // id: terserah
      ...userData,
    };
    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users)); // simpan di local

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    // periksa data pada local storage ada akun / tidak
    const userAvailable = this.users.some((user) => user.username.toLowerCase() === usernameByInput);

    // cek data ada / tidak
    if (userAvailable) {
      // pengembalian data ke controller
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        // pesan: "Data akun anda tidak ditemukan",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
