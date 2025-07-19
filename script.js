// DOM elements
let morseInput = document.getElementById("morse-input");
// let translatedInput = document.getElementById("translated-input");
let mouse = document.getElementById("morse-key");
let username = document.getElementById("username");
let password = document.getElementById("password");
let inputPanel = document.getElementById("input-panel");
let closeBtn = document.getElementById("close-btn");

// Global variables
let startTime;
let duration;
let letterCode = "";
// let decodedResult = "";
let timeoutID = 0;
let usernameFocus = false;
let passwordFocus = false;

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
    "-----": "0"
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
        username.value = username.value + newChar;
    } else if (passwordFocus) {
        password.value = password.value + newChar;
    }

    // reset current input
    letterCode = "";
    morseInput.innerHTML = letterCode;
}

// mouse event handlers
function startHandler() {
    clearTimeout(timeoutID);
    startTime = Date.now();
}

function endHandler() {
    duration = Date.now() - startTime;

    // if short click then dot, if long press then dash
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
}

// text box focus handlers
function usernameFocusHandler() {
    usernameFocus = true;
    passwordFocus = false;
    inputPanel.style.visibility = "visible";
}

function passwordFocusHandler() {
    passwordFocus = true;
    usernameFocus = false;
    inputPanel.style.visibility = "visible";
}

function closeInputPanel() {
    inputPanel.style.visibility = "hidden";
}


mouse.onpointerdown = startHandler;
mouse.onpointerup = endHandler;

username.onfocus = usernameFocusHandler;
password.onfocus = passwordFocusHandler;

closeBtn.onclick = closeInputPanel;

