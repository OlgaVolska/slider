// СЛАЙДЕР ------------------------------------------------

window.addEvenListener('resize', moveNextSlide);
// grid-контейнер для слайдов, лента слайдера
const sliderTape = document.querySelector(".slider__tape");

// //слайды, drid-items
const sliderImage = document.querySelectorAll(".slider__img");

// // кнопки вперед и назад
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

// // сдвиг ленты слайдера
let sliderOffset = 0;

// // ширина сдвига слайдера = ширине одного item + padding родителя
let sliderWidth = sliderImage[0].offsetWidth + sliderImage[0].offsetLeft;

// // сдвиг слайдера  по клику на кнопку
btnNext.addEventListener("click", moveNextSlide);
btnPrev.addEventListener("click", movePrevSlide);

// // движение ленты слайдера вперед
function moveNextSlide() {
  sliderOffset = sliderOffset += sliderWidth;

  //   если сдвиг слайдера больше чем ширина одного grid-item * длину всех items - 1
  if (sliderOffset > sliderWidth * (sliderImage.length - 1)) {
    sliderOffset = 0;
  }
  sliderTape.style.left = -sliderOffset + "px";
}

// // движение ленты слайдера назад
function movePrevSlide() {
  sliderOffset = sliderOffset -= sliderWidth;

  if (sliderOffset < sliderWidth) {
    sliderOffset = 0;
  }

  sliderTape.style.left = -sliderOffset + "px";
}
