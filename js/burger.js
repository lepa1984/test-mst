const burger = document.querySelector('.burger');

if (burger) {
    const menuMobile = document.querySelector('.header__inner');

    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        menuMobile.classList.toggle('active');
        body.classList.toggle('active');
        burger.classList.toggle('active');
    });
}
