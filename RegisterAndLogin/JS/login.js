const form = document.querySelector('.registration');
const emailInput = document.querySelector('.email__container__input');
const emailError = document.querySelector('.email__container__error');

const passwordInput = document.querySelector('.password__container__input');
const passwordError = document.querySelector('.password__container__error');


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

    else {
        const emailInputFetch = emailInput.value
        const passwordInputFetch = passwordInput.value

        fetch('http://api.ultimate.systems/public/index.php/api/v1/login/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: emailInputFetch,
                password: passwordInputFetch,
            })
        })
            .then((res) => {
                if (res.status === 401) {
                    emailError.innerHTML = "*niepoprawne dane";
                    passwordError.innerHTML = "*niepoprawne dane";
                    return;
                } else if (res.status === 200) {
                    res.json()
                        .then((data) => {
                            let expirationDate = new Date();
                            expirationDate.setDate(expirationDate.getDate() + 10);
                            console.log(expirationDate.toUTCString())
                            document.cookie = "token=" + data.token + "; path=/; expires=" + expirationDate.toUTCString();
                            document.cookie = "refresh-token=" + data.refresh_token + "; path=/; expires=" + expirationDate.toUTCString();
                            window.location.assign("../MainSite/main.html")
                        });
                } else {

                    console.log("Błąd logowania");
                }
            })
            .catch(error => console.log('Błąd'));

    }
}

form.addEventListener('submit', checkValue)