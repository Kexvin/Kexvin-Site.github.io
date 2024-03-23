// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');
// const navLogo = document.querySelector('#navbar__logo');
//
// // Display Mobile Menu
// const mobileMenu = () => {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// };
//
// menu.addEventListener('click', mobileMenu);


document.addEventListener("DOMContentLoaded", function() {
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navigationBar').innerHTML = html;

      // Now that the navbar is loaded, initialize event listeners
      const menu = document.querySelector('#mobile-menu');
      const menuLinks = document.querySelector('.navbar__menu');

      const mobileMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
      };

      menu.addEventListener('click', mobileMenu);
    })
    .catch(err => console.warn('Something went wrong.', err));
});


