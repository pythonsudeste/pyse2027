// The ZIP uses this provisional date; it is not a confirmed event date.
const provisionalDate = new Date('2027-07-23T09:00:00-03:00').getTime();
const counters = document.querySelectorAll('[data-countdown]');
function updateCountdown() {
  const seconds = Math.max(0, Math.floor((provisionalDate - Date.now()) / 1000));
  const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
  counters.forEach((counter) => {
    counter.textContent = String(values[Number(counter.dataset.countdown)]).padStart(2, '0');
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Preserve mockup calls to action without suggesting a working service.
const dialog = document.querySelector('#preview-dialog');
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.showModal();
  });
});
