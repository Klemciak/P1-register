
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
        return
    }
    if (passwordInput.value.length < 8) {
        passwordError.innerHTML = "*zbyt mała ilość znaków"
        return
    }

    if (checkPasswordInput.value.length < 8) {
        checkPasswordError.innerHTML = "*zbyt mała ilość znaków"
        return
    }

    if (passwordInput.value != checkPasswordInput.value) {
        passwordError.innerHTML = "*różne hasła"
        checkPasswordError.innerHTML = "*różne hasła"
        return
    }
    else {
        const emailInputFetch = emailInput.value
        const passwordInputFetch = passwordInput.value

        fetch('http://api.ultimate.systems/public/index.php/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailInputFetch,
                plainPassword: passwordInputFetch
            })
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                window.location.assign("login.html")
            }
            return res.json()
        })
            .then(data => console.log(data))
            .catch(error => console.log('ERROR'))
    }



}

form.addEventListener('submit', checkValue)


//------ go to login page vvv


const goToLogin = document.querySelector('.goToLoginSite__container__btn')

goToLogin.addEventListener('click', () => {
    window.location.assign("login.html")
})



