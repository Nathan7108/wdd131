const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !navLinks.classList.contains('hide')) {
        navLinks.classList.add('hide');
    }
});

const popup = document.createElement('div');
popup.className = 'popup-overlay';
popup.innerHTML = `
    <button class="popup-close">&times;</button>
    <img class="popup-image" src="" alt="Full size image">
`;
document.body.appendChild(popup);

const popupImg = popup.querySelector('.popup-image');
const closeBtn = popup.querySelector('.popup-close');

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        popupImg.src = img.src.replace('-sm.', '-full.');
        popup.style.display = 'block';
    });
});

popup.addEventListener('click', (e) => {
    if (e.target === popup || e.target === closeBtn) {
        popup.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        popup.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        navLinks.classList.remove('hide');
    } else {
        navLinks.classList.add('hide');
    }
});
