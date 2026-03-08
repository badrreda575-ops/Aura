document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.glass-card');
    if (card && window.innerWidth >= 1024) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `translateY(-50%) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

// Reset transform on mouse leave window
document.addEventListener('mouseleave', () => {
    const card = document.querySelector('.glass-card');
    if (card && window.innerWidth >= 1024) {
        card.style.transform = 'translateY(-50%) rotateY(0deg) rotateX(0deg)';
        card.style.transition = 'transform 0.5s ease';
    }
});

// Remove transition when moving
document.addEventListener('mouseenter', () => {
    const card = document.querySelector('.glass-card');
    if (card) {
        card.style.transition = 'none';
    }
});
