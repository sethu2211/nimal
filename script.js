// JavaScript for sliding animations
function applySlideAnimation(element, animationClass) {
    element.classList.add(animationClass);
}

const header = document.querySelector('header');
const container = document.querySelector('.container');

// Apply slide-in-left animation to the header
applySlideAnimation(header, 'slide-in-left');

// Apply slide-in-right animation to the container
applySlideAnimation(container, 'slide-in-right');
