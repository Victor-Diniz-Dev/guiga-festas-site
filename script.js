const WHATSAPP_NUMBER = '5511946175604';
const WHATSAPP_TEMPLATE = (selection) =>
  `Olá! Vim pelo site da Guiga Festas e gostaria de fazer um orçamento.\n\n` +
  `Brinquedo ou pacote: ${selection || ''}\n` +
  `Data do evento:\n` +
  `Horário desejado:\n` +
  `Bairro ou CEP:\n` +
  `Local do evento (casa, salão ou condomínio):\n\n` +
  `Poderiam me informar a disponibilidade e o valor do deslocamento?`;

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  const message = WHATSAPP_TEMPLATE(link.dataset.whatsapp);
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Abrir menu' : 'Fechar menu';
  mainNav.classList.toggle('is-open', !isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('.sr-only').textContent = 'Abrir menu';
    mainNav.classList.remove('is-open');
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
