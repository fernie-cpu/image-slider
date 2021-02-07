const slideImage = document.querySelectorAll('.slide-img');
const slideContainer = document.querySelector('.container-slider');
const nextBtn = document.querySelector('.slide-btn-next');
const prevBtn = document.querySelector('.slide-btn-prev');
const navigationDots = document.querySelector('.navigation-dots');

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

//set up slider

function init() {
  /*   
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + '%';
  });

  slideImage[0].classList.add('active');

  createNavigationDots();
}

//create navigatiton dots
function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement('div');
    dot.classList.add('single-dot');
    navigationDots.appendChild(dot);

    dot.addEventListener('click', () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add('active');
}

//next & prev buttons
nextBtn.addEventListener('click', () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }
  currentSlide--;
  goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
  slideContainer.style.transform =
    'translateX(-' + slideWidth * slideNumber + 'px)';

  currentSlide = slideNumber;
  setActiveClass();
}

function setActiveClass() {
  //set active class to slide
  let currentActive = document.querySelector('.slide-img.active');
  currentActive.classList.remove('active');
  slideImage[currentSlide].classList.add('active');
  //set active class to dot
  let currentDot = document.querySelector('.single-dot.active');
  currentDot.classList.remove('active');
  navigationDots.children[currentSlide].classList.add('active');
}

init();

export { init };
