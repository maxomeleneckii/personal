//Variables=====================================================
const burgerBtn = document.querySelector('.burger-menu');
const burgerOverlay = document.querySelector('.menu__burger');
const burgerMenu = document.querySelector('.burger__container');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.navigation__item');

//Functions=====================================================
// Open burger-menu
function openBurger() {
  burgerBtn.classList.toggle('active');
  burgerOverlay.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  body.classList.toggle('active');
}
// Close burger-menu
function closeBurgerMenu() {
  burgerBtn.classList.remove('active');
  burgerOverlay.classList.remove('active');
  burgerMenu.classList.remove('active');
  body.classList.remove('active');
}
// Close burger-menu (click overlay)
burgerOverlay.addEventListener('click', (e) => {
  if (!e.target.closest('.burger__container')) {
    closeBurgerMenu();
  }
});

// Listeners===============================================
navItems.forEach((el) => el.addEventListener('click', closeBurgerMenu));
burgerBtn.addEventListener('click', openBurger);
window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 767) {
    closeBurgerMenu();
  }
});

export { openBurger, closeBurgerMenu };
