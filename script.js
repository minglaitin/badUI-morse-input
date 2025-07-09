let display = document.getElementById("morse-input");
let mouse = document.getElementById("morse-key");
let startTime, duration;
let input = "";

function startHandler() {
    startTime = Date.now();
}

function endHandler() {
    duration = Date.now() - startTime;

    // if short click then dot, if long press then dash
    if (duration < 200) {
        input = input + ".";
    } else {
        input = input + "-";
    }
    display.innerHTML = input;
}

mouse.onpointerdown = startHandler;
mouse.onpointerup = endHandler;