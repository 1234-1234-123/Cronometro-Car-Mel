let startTime, timerInterval;
let times = [];

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const captureBtn = document.getElementById('captureBtn');
const tableBody = document.querySelector('#resultsTable tbody');

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
    startBtn.disabled = true;
    captureBtn.disabled = false;
}

function updateDisplay() {
    const elapsed = Date.now() - startTime;
    display.textContent = formatTime(elapsed);
}

function formatTime(ms) {
    let date = new Date(ms);
    return date.toISOString().substr(11, 11);
}

function captureTime() {
    const currentTime = Date.now() - startTime;
    times.push(currentTime);
    
    const firstTime = times[0];
    const diff = currentTime - firstTime;
    
    const row = `<tr>
        <td>${times.length}</td>
        <td>${formatTime(currentTime)}</td>
        <td>${times.length === 1 ? '-' : '+' + (diff/1000).toFixed(2) + 's'}</td>
    </tr>`;
    
    tableBody.innerHTML += row;
}

startBtn.onclick = startTimer;
captureBtn.onclick = captureTime;
document.getElementById('resetBtn').onclick = () => location.reload();
