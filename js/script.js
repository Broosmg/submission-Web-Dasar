const navbarNav = document.querySelector('.navbar-nav');
const menuTombol = document.querySelector('#menu');

menuTombol.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});