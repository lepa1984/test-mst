const btnsPopup = document.querySelectorAll('.open-popup');

if (btnsPopup.length) {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.modal');
    const close = document.querySelectorAll('.close');
    const body = document.querySelector('body');

    close.forEach((btn) => {
        btn.addEventListener('click', () => {
            closePopup();
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target == modalOverlay) {
            closePopup();
        }
    });

    btnsPopup.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let path = e.currentTarget.getAttribute('data-path');

            e.preventDefault();
            openPopup(path);
        });
    });

    function openPopup(path) {
        modals.forEach((el) => {
            el.classList.remove('active');

            document
                .querySelector(`[data-target="${path}"]`)
                .classList.add('active');
            modalOverlay.classList.add('active');
            body.classList.add('active');
        });
    }
    function closePopup() {
        modalOverlay.classList.remove('active');
        body.classList.remove('active');
        modals.forEach((el) => {
            el.classList.remove('active');
        });
    }
}

// validate

function mask(event) {
    var matrix = '+7 (___) ___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
        val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
            ? ''
            : a;
    });
    event.target.parentNode.classList.add('del-span');
    if (event.type == 'blur') {
        if (this.value.length < 18) {
            this.value = '';
        }
    }
}
const phones = document.querySelectorAll("input[name='phone']");
phones.forEach((phone) => {
    phone.addEventListener('input', mask);
});

function validateName(nameInput) {
    const isValid = nameInput.value.length >= 2;
    nameInput.parentNode.classList.toggle('active', !isValid);
    return isValid;
}

function validatePhone(phoneInput) {
    const isValid = phoneInput.value.length === 18;
    phoneInput.parentNode.classList.toggle('active', !isValid);
    phoneInput.parentNode.classList.toggle('valid', isValid);
    return isValid;
}

function validateEmail(emailInput) {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    emailInput.parentNode.classList.toggle('active', !isValid);
    return isValid;
}

function deleteActive(input) {
    if (input.parentNode.classList.contains('active')) {
        input.addEventListener('input', () => {
            input.parentNode.classList.remove('active');
        });
    }
}

function validateForm(form) {
    let isValid = true;
    const checkBox = form.querySelector('input[type="checkbox"]');
    if (!checkBox.checked) {
        isValid = false;
        checkBox.parentNode.classList.add('active');
    }
    const namesInputs = form.querySelectorAll("input[name='name'][required]");
    const textareaInputs = form.querySelectorAll('textarea[required]');
    const phoneInputs = form.querySelectorAll("input[name='phone'][required]");
    const emailInputs = form.querySelectorAll("input[name='email'][required]");

    emailInputs.forEach((emailInput) => {
        isValid = validateEmail(emailInput) && isValid;
    });
    phoneInputs.forEach((phoneInput) => {
        isValid = validatePhone(phoneInput) && isValid;
    });
    namesInputs.forEach((namesInput) => {
        isValid = validateName(namesInput) && isValid;
    });

    textareaInputs.forEach((textareaInput) => {
        isValid = validateName(textareaInput) && isValid;
    });

    const inputForms = form.querySelectorAll('input');

    inputForms.forEach((input) => {
        deleteActive(input);
    });
    textareaInputs.forEach((textarea) => {
        deleteActive(textarea);
    });
    return isValid;
}

function handleSubmit(form) {
    if (validateForm(form)) {
        form.classList.add('active');
        form.reset();
        if (
            form.classList.contains('form-application') ||
            form.classList.contains('form-order')
        ) {
            openPopup('after-popup');
        }
    }
}

const formApplication = document.querySelector('.form-application');

if (formApplication) {
    const submitBtn = formApplication.querySelector('.form-btn');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmit(formApplication);
    });
}
const formOrder = document.querySelector('.form-order');

if (formOrder) {
    const submitBtn = formOrder.querySelector('.form-btn');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmit(formOrder);
    });
}
