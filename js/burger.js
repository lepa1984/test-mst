if (window.matchMedia('(max-width:1025px)').matches) {
    const burgerMenu = document.querySelector('.burger');

    const linksList = document.querySelectorAll('.header .nav__link');
    if (burgerMenu) {
        toggleMenu(burgerMenu);
    }

    if (linksList.length) {
        linksList.forEach((link) => {
            toggleMenu(link);
        });
    }

    function toggleMenu(el) {
        console.log(el);

        const menu = document.querySelector('.header__nav');
        if (el) {
            el.addEventListener('click', () => {
                menu.classList.toggle('active');
                burgerMenu.classList.toggle('active');
                document.querySelector('body').classList.toggle('active');
            });
        }
    }
}
