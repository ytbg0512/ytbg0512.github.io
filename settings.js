const modal = document.querySelector(".modal");
const settingsPopup = document.querySelector("#settings");
const settingsBtn = document.querySelector("#open-settingsBtn");
const closeBtn = document.querySelector("#close-settingsBtn");
const makerBtn = document.querySelector("#maker");
const gitHubBtn = document.querySelector("#github-button");
const searchBar = document.querySelector("#searchbar");

let preventKeyboardShortcut = false;

function openSettings() {
        modal.classList.add("visible");
        settingsPopup.classList.add("visible");
        modal.classList.remove("hidden");
        settingsPopup.classList.remove("hidden");
        modal.style.opacity = "0.7";
        settingsPopup.style.opacity = "1";
        settingsBtn.style.display = "none";
        closeBtn.classList.add("visible");
        closeBtn.classList.remove("hidden");
        makerBtn.classList.add("visible");
        makerBtn.classList.remove("hidden");
        gitHubBtn.classList.add("hidden");
        gitHubBtn.classList.remove("visible");
}

function closeSettings() {
        modal.classList.add("hidden");
        settingsPopup.classList.add("hidden")
        modal.classList.remove("visible");
        settingsPopup.classList.remove("visible");
        modal.style.opacity = "0";
        settingsPopup.style.opacity = "0";
        settingsBtn.style.display = "inline";
        closeBtn.classList.remove("visible");
        closeBtn.classList.add("hidden");
        makerBtn.classList.remove("visible");
        makerBtn.classList.add("hidden");
        gitHubBtn.classList.add("visible");
        gitHubBtn.classList.remove("hidden");
}

function blockShortcut() {
    preventKeyboardShortcut = true;
}

function allowShortcut() {
    preventKeyboardShortcut = false;
}

function init() {
    modal.addEventListener("click", closeSettings);
    settingsBtn.addEventListener("click", openSettings);
    closeBtn.addEventListener("click", closeSettings);
    searchBar.addEventListener("focusin", blockShortcut);
    searchBar.addEventListener("focusout", allowShortcut);

    if(preventKeyboardShortcut == false) {
        document.addEventListener('keydown', (event) => {
            if(event.code == "Escape") {
                closeSettings();
            } else if(event.code == "KeyS") {
                openSettings();
            }
        });
    }
}

init();