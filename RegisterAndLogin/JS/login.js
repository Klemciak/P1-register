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
        }).then((res) => {
            console.log(res);
            if (res.status === 401) {
                emailError.innerHTML = "*niepoprawne dane"
                passwordError.innerHTML = "*niepoprawne dane"
                return
            } else if (res.status === 200) {
                res.json()
                    .then((data) => {
                        console.log(data)


                        fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/token/refresh', {
                            method: 'POST',
                            headers: {
                                'accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                'refresh_token': data.refresh_token
                            })
                        }).then((res) => {
                            console.log(res)
                            res.json()
                                .then((data) => {
                                    console.log(data)
                                    localStorage.setItem('new_refresh_token', data.refresh_token)
                                })

                            window.location.assign("../MainSite/main.html")
                        })


                    })


            }
        })
            .catch(error => console.log('ERROR'))

    }
}

form.addEventListener('submit', checkValue)