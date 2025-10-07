
  const toggleButton = document.querySelector('.navbar-toggle');
  const navLinks = document.getElementById('navLinks');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

