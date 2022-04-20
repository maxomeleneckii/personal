// const sliderItms = document.querySelectorAll('.slider__items');
// const sliderItm = document.querySelectorAll('.slider__item');
// sliderItms.forEach((el) => console.log(el));
//Functions=====================================================
//Getting data from JSON
async function getPets() {
  const petsImgs = document.querySelectorAll('.slider__item > img');
  const petsNames = document.querySelectorAll('.slider__item > h3');
  const pets = 'pets.json';
  const res = await fetch(pets);
  const data = await res.json();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(data);

  let k = 0;
  for (let i = 0; i < petsImgs.length; i++) {
    if (petsImgs[i].src === '') {
      if (k === data.length) {
        k = 0;
        shuffle(data);
        petsImgs[i].src = data[k].img;
        petsNames[i].textContent = data[k].name;
      } else {
        petsImgs[i].src = data[k].img;
        petsNames[i].textContent = data[k].name;
      }
      k++;
    }
  }
}

//Exporting different files=====================================================
export { getPets };
