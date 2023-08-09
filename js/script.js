// Smooth scrolling to section on click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: section.offsetTop
        });
    });
});
