let startTime, interval;
let running = false;
let elapsed = 0;

function updateDisplay() {
  const time = Date.now() - startTime + elapsed;
  const date = new Date(time);
  const min = String(date.getUTCMinutes()).padStart(2, '0');
  const sec = String(date.getUTCSeconds()).padStart(2, '0');
  const ms = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${min}:${sec}:${ms}`;
}

function start() {
  if (running) return;
  startTime = Date.now();
  interval = setInterval(updateDisplay, 50);
  running = true;
}

function pause() {
  if (!running) return;
  clearInterval(interval);
  elapsed += Date.now() - startTime;
  running = false;
}

function reset() {
  clearInterval(interval);
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  running = false;
  elapsed = 0;
}

function lap() {
  if (!running) return;
  const lapTime = document.getElementById('display').textContent;
  const li = document.createElement('li');
  li.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(li);
}
