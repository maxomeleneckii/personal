//Variables=====================================================
// const sliderCont = document.querySelector('.slider__container');
const sliderElement = document.querySelectorAll('.slider__item');
const closePopup = document.querySelector('.popup__btn');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const btn = document.querySelectorAll('.slider-btn');

//Functions=====================================================

// Open popup
function openPopup() {
  overlay.classList.add('active');
  body.classList.add('active');
}

// Close popup
function closePopupWindow() {
  overlay.classList.remove('active');
  body.classList.remove('active');
}

// Close popup (click overlay)
overlay.addEventListener('click', (e) => {
  if (!e.target.closest('.popup__content')) {
    closePopupWindow();
  }
});

//Mouse events
sliderElement.forEach((el) => el.addEventListener('click', openPopup));
sliderElement.addEventListener('click', openPopup);
closePopup.addEventListener('click', closePopupWindow);

export { openPopup, closePopupWindow };
