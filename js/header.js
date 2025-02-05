document.addEventListener('scroll', () => {
    if (scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    if (scrollY == 0) {
        document.querySelector('.header').classList.remove('active');
    }
});
