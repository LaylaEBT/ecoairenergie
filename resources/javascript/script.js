// Get the image slider elements

const imageSliderContainer = document.querySelector('.image-slider-container');

const imageSliderWrapper = document.querySelector('.image-slider-wrapper');

const imageSliderItems = document.querySelectorAll('.image-slider-item');

const navigationDots = document.querySelectorAll('.dot');


// Set the initial active image slider item

let activeIndex = 0;
imageSliderItems[activeIndex].style.display = 'block';

navigationDots[activeIndex].classList.add('active');

navigationDots.forEach((dot, index) => {

  dot.addEventListener('click', () => {

    activeIndex = index;

    updateImageSlider();

  });

});


function updateImageSlider() {


  imageSliderItems.forEach((item) => {

    item.style.display = 'none';

  });


  imageSliderItems[activeIndex].style.display = 'block';


navigationDots.forEach((dot, index) => {

  if (index === activeIndex) {

    dot.classList.add('active');

  } else {

    dot.classList.remove('active');

  }
});
}

setInterval(() => {

  activeIndex++;

  if (activeIndex >= imageSliderItems.length) {

    activeIndex = 0;

  }

  updateImageSlider();

}, 5000);