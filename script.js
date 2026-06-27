const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
