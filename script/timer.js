const countdownDate = new Date('2023-11-25 23:59:59');

function updateCountdown() {
  const now = new Date();
  const timeLeft = countdownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById('countdown-timer').innerHTML = 'Discount expired!';
  }
}

const countdown = setInterval(updateCountdown, 1000);
