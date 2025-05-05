// Scroll suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Menu responsivo
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo');
  });
  