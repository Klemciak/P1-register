const form = document.querySelector('.registration');
const emailInput = document.querySelector('.email__container__input');
const emailError = document.querySelector('.email__container__error');

const passwordInput = document.querySelector('.password__container__input');
const passwordError = document.querySelector('.password__container__error');

const checkPasswordInput = document.querySelector('.checkPassword__container__input')
const checkPasswordError = document.querySelector('.checkPassword__container__error')

const checkValue = (e) => {
    e.preventDefault();
    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = '*niepoprawny adres e-mail'
    }

    if (passwordInput.value.length < 8) {
        passwordError.innerHTML = "*zbyt mała ilość znaków"
    }
    if (checkPasswordInput.value.length < 8) {
        checkPasswordError.innerHTML = "*zbyt mała ilość znaków"
    }

    if (passwordInput.value != checkPasswordInput.value) {
        passwordError.innerHTML = "*różne hasła"
        checkPasswordError.innerHTML = "*różne hasła"
    }



}

form.addEventListener('submit', checkValue)

