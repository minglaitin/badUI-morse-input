let morseInput = document.getElementById("morse-input");
let translatedInput = document.getElementById("translated-input");
let mouse = document.getElementById("morse-key");
let startTime, duration;
let letterCode = "";
let decodedResult = "";
let timeoutID = 0;

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

    decodedResult = decodedResult + newChar;
    translatedInput.innerHTML = decodedResult;

    // reset current input
    letterCode = "";
    morseInput.innerHTML = letterCode;
}

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


mouse.onpointerdown = startHandler;
mouse.onpointerup = endHandler;

