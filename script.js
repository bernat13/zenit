const images = [
    'assets/CARTELES_EXTRAORDINARIOS-04_v2.jpg',
    'assets/CARTELES_EXTRAORDINARIOS-07_v2.jpg',
    'assets/CARTELES_EXTRAORDINARIOS-08_v2.jpg',
    'assets/CARTELES_EXTRAORDINARIOS-09_v2.jpg'
];

const hero = document.getElementById('hero-image');
const carousel = document.getElementById('carousel');

let currentIndex = 0;
let rotationInterval;

function setHeroImage(index) {
    hero.style.backgroundImage = `url('${images[index]}')`;
    updateActiveCarouselItem(index);
    currentIndex = index;
}

function updateActiveCarouselItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function nextImage() {
    let nextIndex = (currentIndex + 1) % images.length;
    setHeroImage(nextIndex);
}

function initCarousel() {
    // Random start
    currentIndex = Math.floor(Math.random() * images.length);
    setHeroImage(currentIndex);

    // Build carousel
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('carousel-item');
        img.alt = `Cartel ${index + 1}`;
        img.addEventListener('click', () => {
            setHeroImage(index);
            resetInterval();
        });
        carousel.appendChild(img);
    });

    // Set initial active state
    updateActiveCarouselItem(currentIndex);

    // Start rotation
    startInterval();
}

function startInterval() {
    rotationInterval = setInterval(nextImage, 10000); // 10 seconds
}

function resetInterval() {
    clearInterval(rotationInterval);
    startInterval();
}

document.addEventListener('DOMContentLoaded', initCarousel);
