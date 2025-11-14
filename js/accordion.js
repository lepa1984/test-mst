if (window.matchMedia('(max-width: 769px)').matches) {
    const accordionsListFooter =
        document.querySelectorAll('.footer .nav__icon');

    if (accordionsListFooter.length) {
        accordionsMenu(accordionsListFooter);
    }

    function accordionsMenu(btns) {
        btns.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const self = e.currentTarget;
                const content = self.parentNode.nextElementSibling;
                if (content) {
                    self.parentNode.classList.toggle('open');
                    if (self.parentNode.classList.contains('open')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = null;
                        if (content.classList.contains('active')) {
                            content.classList.remove('active');
                        }
                    }
                }
            });
        });
    }
}
