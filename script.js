// only the large slide images
const largeImages = [
  'images/roses-large.jpg',
  'images/roses-large2.jpg',
  'images/roses-large3.jpg',
  'images/roses-large4.jpg'
];

let slideIndex = 0;
const largeImgEl = document.querySelector('.hero-image img');
const nextBtn = document.querySelector('.arrow.next');
const dots = document.querySelectorAll('.dot');

function updateLargeImage() {
  largeImgEl.src = largeImages[slideIndex];
}

// next button: advance the large image only
nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % largeImages.length;
  updateLargeImage();
});

// dot clicks: jump to that large image only
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    slideIndex = idx;
    updateLargeImage();
  });
});

// initialize
updateLargeImage();
