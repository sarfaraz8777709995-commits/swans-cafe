const closeAnnouncement = document.querySelector('.announcement-close');
closeAnnouncement?.addEventListener('click', () => document.querySelector('.announcement').remove());

const toggle = document.querySelector('.menu-toggle');
toggle?.addEventListener('click', () => {
  const opened = document.body.classList.toggle('mobile-open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('mobile-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    const category = tab.dataset.category;
    document.querySelectorAll('.menu-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.type !== category;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
const dateInput = document.querySelector('input[name="date"]');
if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

document.getElementById('reservationForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = `Thanks, ${data.get('name')}! Your table request is filled in. This demo form is not connected to the cafe yet. Please contact Swans Cafe directly to confirm your booking.`;
  document.getElementById('formMessage').textContent = message;
  form.reset();
});
