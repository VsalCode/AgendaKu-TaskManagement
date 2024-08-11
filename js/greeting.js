document.addEventListener("DOMContentLoaded", function () {
  // Get the current date and time
  const now = new Date();
  const hours = now.getHours();

  let greeting = "Selamat";
  let timeOfDay = "";

  // Determine the correct greeting based on the time
  if (hours >= 0 && hours < 11) {
    timeOfDay = "Pagi 🌞";
  } else if (hours >= 11 && hours < 15) {
    timeOfDay = "Siang 🌞";
  } else if (hours >= 15 && hours < 18) {
    timeOfDay = "Sore ⛅";
  } else {
    timeOfDay = "Malam 🌙";
  }

  // Set the greeting and time of day
  document.getElementById("greeting").textContent = greeting;
  document.getElementById("timeOfDay").textContent = timeOfDay;
});
