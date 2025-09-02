// DOM elements 
let audio = document.getElementById("audio");
let morseInput = document.getElementById("morse-input");
// let translatedInput = document.getElementById("translated-input");

// Form-related DOM elements
let username = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

// Input panel DOM elements
let inputPanel = document.getElementById("input-panel");
let inputPanelContainer = document.getElementById("input-panel-container");
let closeBtn = document.getElementById("close-btn");
let morseKeyBtn = document.getElementById("morse-key-btn");
let finger = document.getElementById("finger");

// SVG elements
let spring = document.getElementById("spring");
let lever = document.getElementById("lever");


// Global variables
let startTime;
let duration;
let letterCode = "";
// let decodedResult = "";
let timeoutID = 0;
let usernameFocus = false;
let passwordFocus = false;
let confirmPasswordFocus = false;
let keyPressed = false;

const MORSE_CODE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "........": "DEL"
};

function decodeChar(code) {
    let newChar = MORSE_CODE[code];
    
    // if invalid morse code
    if (!newChar) {
        newChar = "";
    }

    // decodedResult = decodedResult + newChar;
    // translatedInput.innerHTML = decodedResult;

    // update value in the textbox on focus
    if (usernameFocus) {
        if (newChar !== "DEL") {
            username.value = username.value + newChar;
        }
    } else if (passwordFocus) {
        if (newChar !== "DEL") {
            password.value = password.value + newChar;
        } else {
            password.value = password.value.slice(0, -1);
        }
    } else if (confirmPasswordFocus) {
        if (newChar !== "DEL") {
            confirmPassword.value = confirmPassword.value + newChar;
        } else {
            confirmPassword.value = confirmPassword.value.slice(0, -1);
        }
    }

    // reset current input
    letterCode = "";
    morseInput.innerHTML = letterCode;
}

// mouse event handlers
function startHandler() {
    keyPressed = true;

    // duration calculation
    clearTimeout(timeoutID);
    startTime = Date.now();

    // change svg
    lever.setAttribute("transform", "rotate(3, 113, 55)");
    spring.setAttribute("transform", "translate(147 79) scale(1, 0.9) translate(-147 -79)");

    audio.play();
    finger.style.top = "60px";
}

function endHandler() {
    if (keyPressed) {
        // determine dot or dash
        duration = Date.now() - startTime;
        if (duration < 200) {
            letterCode = letterCode + ".";
        } else {
            letterCode = letterCode + "-";
        }
        morseInput.innerHTML = letterCode;

        // 1 sec between each character
        timeoutID = setTimeout(() => {
            decodeChar(letterCode);
        }, 1000);

        // change svg
        lever.setAttribute("transform", "rotate(-1, 113, 55)");
        spring.setAttribute("transform", "translate(147 79) scale(1, 1) translate(-147 -79)");

        audio.pause();
        finger.style.top = "0";
    }
    keyPressed = false;
}

// text box focus handler
function changeFocus(username, password, confirmPassword) {
    usernameFocus = username;
    passwordFocus = password;
    confirmPasswordFocus = confirmPassword;

    inputPanelContainer.style.visibility = "visible";
    inputPanel.style.bottom = 0;
}

function closeInputPanel() {
    inputPanelContainer.style.visibility = "hidden";
    inputPanel.style.bottom = "-100%";
}


morseKeyBtn.onpointerdown = startHandler;
morseKeyBtn.onpointerup = endHandler;
morseKeyBtn.onpointerenter = () => {
    finger.style.visibility = "visible";
};
morseKeyBtn.onpointerleave = () => {
    finger.style.visibility = "hidden";
    endHandler();
};

username.onfocus = () => changeFocus(true, false, false);
password.onfocus =  () => changeFocus(false, true, false);
confirmPassword.onfocus = () => changeFocus(false, false, true);

closeBtn.onclick = closeInputPanel;
