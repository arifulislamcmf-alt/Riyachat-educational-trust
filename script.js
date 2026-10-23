const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Website enquiry — Riyachat Educational Trust');
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});