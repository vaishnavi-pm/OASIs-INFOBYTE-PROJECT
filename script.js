// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if(href === '#') return;

    const target = document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close mobile nav after click
      if (nav.classList.contains('show')){
        nav.classList.remove('show');
      }
    }
  });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get('name')?.trim();
  const email = data.get('email')?.trim();
  const message = data.get('message')?.trim();

  if(!name || !email || !message){
    formMessage.textContent = 'Please fill all fields.';
    return;
  }

  formMessage.textContent = 'Thanks — your message was received!';
  contactForm.reset();
});

// Footer year auto-update
document.getElementById('year').textContent = new Date().getFullYear();
