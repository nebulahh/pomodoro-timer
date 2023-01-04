let countdown;
const timer_display = document.querySelector('.display__time-left');
const end_time = document.querySelector('.display__end-time');
const outline = document.querySelector('.moving-outline circle');

const stop_and_play = document.querySelector('.start_btn');
const outlineLength = outline.getTotalLength();
const buttons = document.querySelectorAll('[data-time]');

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;

function timer(seconds) {
  clearInterval(countdown);

  stop_and_play.textContent = 'STOP';

  const now = Date.now();
  const then = now + seconds * 1000;

  display_time_left(seconds);
  display_end_time(then);

  countdown = setInterval(() => {
    const seconds_left = Math.round((then - Date.now()) / 1000);
    if (seconds_left < 0) {
      clearInterval(countdown);
      return;
    }

    display_time_left(seconds_left, seconds);
  }, 1000);
}

function display_time_left(seconds, duration) {
  const minutes = Math.floor(seconds / 60);
  const remainder_seconds = seconds % 60;
  const display = `${minutes}:${
    remainder_seconds < 10 ? '0' : ''
  }${remainder_seconds}`;
  document.title = display;
  timer_display.textContent = display;
  let progress = outlineLength - (seconds / duration) * outlineLength;
  outline.style.strokeDashoffset = progress;
  if (remainder_seconds === 0) {
    stop_and_play.textContent = 'START';
  }
}

function display_end_time(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
}

function start_timer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => {
  button.addEventListener('click', start_timer);
});

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

function stop_time(e) {
  if (e.target.textContent === 'STOP') {
    clearInterval(countdown);
    console.log(e.target);
    outline.style.strokeDashoffset = outlineLength;
    stop_and_play.textContent = 'START';
    display_time_left(0, 0);
  } else {
    console.log('start a new timer');
  }
}

stop_and_play.addEventListener('click', stop_time);
