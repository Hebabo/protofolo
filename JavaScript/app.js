
function smoothScrollTo(targetElement, duration = 1000) {
const startY = window.pageYOffset;
const endY = targetElement.getBoundingClientRect().top + startY;
const distance = endY - startY;
const startTime = performance.now();

function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeInOutQuad = progress < 0.5
    ? 2 * progress * progress
    : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startY + distance * easeInOutQuad);

    if (progress < 1) {
    requestAnimationFrame(step);
    }
}

requestAnimationFrame(step);
}

// Apply to all anchor links starting with #
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
    smoothScrollTo(targetElement, 1200); // 1.2 second scroll
    }
});
});
