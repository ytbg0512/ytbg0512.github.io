const weatherBtn = document.getElementById("weatherBtn");

function handleWeatherClick() {
    location.href = "https://ytbg0512.github.io/weather";
}

if (weatherBtn) {
    weatherBtn.addEventListener("click", handleWeatherClick);
}