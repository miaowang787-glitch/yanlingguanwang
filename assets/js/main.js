const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const backToTop = document.querySelector('.back-to-top');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

const toggleBackToTop = () => {
  if (!backToTop) return;
  const shouldShow = window.scrollY > 400;
  backToTop.classList.toggle('visible', shouldShow);
};

toggleBackToTop();
window.addEventListener('scroll', toggleBackToTop);

const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');

    const message = document.createElement('div');
    message.className = 'form__success';
    message.textContent = `感谢${name || '您'}的信任，我们的顾问将尽快联系您！`;

    const existingMessage = contactForm.querySelector('.form__success');
    if (existingMessage) {
      existingMessage.remove();
    }

    contactForm.appendChild(message);
    contactForm.reset();

    setTimeout(() => {
      message.classList.add('visible');
    }, 10);
  });
}
