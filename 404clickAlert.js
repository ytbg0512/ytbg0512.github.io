const errorText = document.querySelector('h1');
const body = document.querySelector('body');

let clickCount = 0;

function runClickEvent() {
    if (clickCount == 5) {
        body.style.backgroundImage = "url(http://www.krsanup.co.kr/board/data/file/2_2_2/31277482_ax4qpv0r_BCD2B0EDB1E2B9CCBFAAB1B9.png)";
        alert('미역국 모드 활성화됨');
    } else if (clickCount > 9) {
        body.style.backgroundImage = "none";
        clickCount = 0;
        alert('미역국 모드 비활성화됨');
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
