const weatherBtn = document.getElementById("weatherBtn");
const paintjsBtn = document.getElementById("paintjsBtn");
const flectOSBtn = document.getElementById("flectOSBtn");
const padaOSBtn = document.getElementById("padaOSBtn");
const gimchiBtn = document.getElementById("gimchiBtn");

function handlePadaOSClick() {
    location.href = "https://padaos.weebly.com/";
}

function handleFlectOSClick() {
    location.href = "https://ytbg0512.github.io/FlectOS";
}

function handleWeatherClick() {
    location.href = "https://ytbg0512.github.io/weather";
}

function handlePaintjsClick() {
    location.href = "https://ytbg0512.github.io/paintJS";
}

function handleGimchiClick() {
    location.href = "https://ytbg0512.github.io/gimchijjigae";
}

if (weatherBtn !== undefined) {
    weatherBtn.addEventListener("click", handleWeatherClick);
}

if (paintjsBtn !== undefined) {
    paintjsBtn.addEventListener("click", handlePaintjsClick);
}

if (flectOSBtn !== undefined) {
    flectOSBtn.addEventListener("click", handleFlectOSClick);
}

if (padaOSBtn !== undefined) {
    padaOSBtn.addEventListener("click", handlePadaOSClick);
}

if (gimchiBtn !== undefined) {
    gimchiBtn.addEventListener("click", handleGimchiClick);
}