let display = document.getElementById("morse-input");
let mouse = document.getElementById("morse-key");
let startTime, endTime;

function startHandler() {
    startTime = Date.now();
}

function endHandler() {
    endTime = Date.now();
    display.innerHTML = `You pressed ${endTime - startTime} milliseconds`;
}

mouse.onpointerdown = startHandler;
mouse.onpointerup = endHandler;