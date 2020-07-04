const weatherBtn = document.getElementById("weatherBtn");
const paintjsBtn = document.getElementById("paintjsBtn");

function handleWeatherClick() {
    location.href = "https://ytbg0512.github.io/weather";
}

function handlePaintjsClick() {
    location.href = "https://ytbg0512.github.io/paintJS";
}

if (weatherBtn) {
    weatherBtn.addEventListener("click", handleWeatherClick);
}

if (paintjsBtn) {
    paintjsBtn.addEventListener("click", handlePaintjsClick);
}