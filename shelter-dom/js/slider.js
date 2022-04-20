//Importing different files=====================================================
import { getPets } from './data.js';

//Variables=====================================================
const sliderContainer = document.querySelector('.slider__container');
const sliderBlock = document.querySelector('.slider__items');
const sliderBtnLearn = document.querySelector('.btn__lm');
const sliderBtnRight = document.querySelector('.slider-btn__right');
const sliderBtnLeft = document.querySelector('.slider-btn__left');

//Functions=====================================================
//Вraw blocks after page load
function drowBlocks() {
  for (let i = 0; i < 2; i++) {
    const block = document.createElement('div');
    sliderContainer.append(block);
    block.classList.add('slider__items');
    for (let i = 0; i < sliderBlock.children.length; i++) {
      const blockItem = document.createElement('div');
      block.append(blockItem);
      blockItem.classList.add('slider__item');
      const img = document.createElement('img');
      const caption = document.createElement('h3');
      const btn = sliderBtnLearn.cloneNode(true);
      blockItem.append(img, caption, btn);
      caption.classList.add('pet__name', 'subcaption');
    }
  }
  getPets();
}
drowBlocks();

//Add a block to the end
function addBlockAfter(el) {
  sliderContainer.append(el);
}

//Add a block to the beginning
function addBlockBefore(el) {
  sliderContainer.prepend(el);
}

//Create block
function createBlock(el) {
  const newBlock = document.createElement('div');
  el(newBlock);
  newBlock.classList.add('slider__items');
  for (let i = 0; i < sliderBlock.children.length; i++) {
    const blockItem = document.createElement('div');
    newBlock.append(blockItem);
    blockItem.classList.add('slider__item');
    const img = document.createElement('img');
    const caption = document.createElement('h3');
    const btn = sliderBtnLearn.cloneNode(true);
    blockItem.append(img, caption, btn);
    caption.classList.add('pet__name', 'subcaption');
  }
  getPets();
}

//Slider movement to the left
function movieBlockRight() {
  sliderBtnRight.removeEventListener('click', movieBlockRight);
  const sliderBlockAll = document.querySelectorAll('.slider__items');
  sliderBlockAll.forEach((el) => (el.style.left = -200 + '%'));
  setTimeout(() => {
    sliderBlockAll.forEach((el) => {
      el.style.transition = 0 + 's';
      el.style.left = -100 + '%';
    });
    sliderBlockAll[0].remove();
    createBlock(addBlockAfter);
    sliderBtnRight.addEventListener('click', movieBlockRight);
  }, 800);
  sliderBlockAll.forEach((el) => {
    el.style.transition = 0.8 + 's';
  });
}

//Slider movement to the right
function movieBlockLeft() {
  sliderBtnLeft.removeEventListener('click', movieBlockLeft);
  const sliderBlockAll = document.querySelectorAll('.slider__items');
  sliderBlockAll.forEach((el) => (el.style.left = 0 + '%'));
  setTimeout(() => {
    sliderBlockAll.forEach((el) => {
      el.style.transition = 0 + 's';
      el.style.left = -100 + '%';
    });
    sliderBlockAll[2].remove();
    createBlock(addBlockBefore);
    sliderBtnLeft.addEventListener('click', movieBlockLeft);
  }, 800);
  sliderBlockAll.forEach((el) => {
    el.style.transition = 0.8 + 's';
  });
}

//Mouse events
sliderBtnRight.addEventListener('click', movieBlockRight);
sliderBtnLeft.addEventListener('click', movieBlockLeft);

//Exporting different files=====================================================
export { drowBlocks, createBlock, movieBlockRight, movieBlockLeft };
