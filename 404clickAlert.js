const errorText = document.querySelector('h1');
const body = document.querySelector('body');

let clickCount = 0;

function runClickEvent() {
    if (clickCount == 5) {
        body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/01/05/09/18/food-1954424_960_720.png)";
        alert('김치찌개 모드 활성화됨');
    } else if (clickCount > 9) {
        body.style.backgroundImage = "none";
        clickCount = 0;
        alert('김치찌개 모드 비활성화됨');
    }
}

function countClick() {
    clickCount = clickCount + 1;
    runClickEvent();
}

function listenToClick() {
    errorText.addEventListener("click", countClick);
}

function init() {
    listenToClick();
}

init();