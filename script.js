const smallImages = [
  'images/roses-small.jpg',
  'images/roses-small2.jpg',
  'images/roses-small3.jpg',
  'images/roses-small4.jpg'
];
const largeImages = [
  'images/roses-large.jpg',
  'images/roses-large2.jpg',
  'images/roses-large3.jpg',
  'images/roses-large4.jpg'
];

let slideIndex = 0;
const total = largeImages.length;
const currentEl = document.querySelector('.current');
const dots = document.querySelectorAll('.dot');
const smallImgEl = document.querySelector('.small-image');
const largeImgEl = document.querySelector('.hero-image img');
const nextBtn = document.querySelector('.arrow.next');

function updateSlider() {
  // update images
  smallImgEl.src = smallImages[slideIndex];
  largeImgEl.src = largeImages[slideIndex];
  // update numbers
  currentEl.textContent =
    slideIndex + 1 < 10 ? '0' + (slideIndex + 1) : slideIndex + 1;
  // update dots
  dots.forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

// next button
nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % total;
  updateSlider();
});

// clicking dots
dots.forEach((dot, idx) =>
  dot.addEventListener('click', () => {
    slideIndex = idx;
    updateSlider();
  })
);

// init
updateSlider();
