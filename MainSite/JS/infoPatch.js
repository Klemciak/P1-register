
const allCookies = document.cookie;
const cookiesArray = allCookies.split(';');

let accessToken, refreshToken;

for (let i = 0; i < cookiesArray.length; i++) {
    const cookie = cookiesArray[i].trim();
    if (cookie.startsWith("token=")) {
        accessToken = cookie.substring("token=".length);
    } else if (cookie.startsWith("refresh-token=")) {
        refreshToken = cookie.substring("refresh-token=".length);
    }
}





//input field
let inputEmail = document.querySelector('.editPopUp__email__input')
let inputName = document.querySelector('.editPopUp__name__input')
let inputSurname = document.querySelector('.editPopUp__surname__input')
let inputBirthdate = document.querySelector('.editPopUp__birthdate__input')
let inputPrefix = document.querySelector('.editPopUp__phone__prefix')
let inputPhone = document.querySelector('.editPopUp__phone__number')

//checkbox

let boxPolicy = document.querySelector('.editPopUp__policy__checkbox')
let boxMarketing = document.querySelector('.editPopUp__marketing__checkbox')
let boxRegulations = document.querySelector('.editPopUp__regulations__checkbox')

// error
const EmailError = document.querySelector('.editPopUp__email__error')
const NameError = document.querySelector('.editPopUp__name__error')
const SurnameError = document.querySelector('.editPopUp__surname__error')
const PolicyError = document.querySelector('.editPopUp__policy__error')
const RegulationsError = document.querySelector('.editPopUp__regulations__error')

//btn form
const saveForm = document.querySelector('.editPopUp')









fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/token/refresh', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'refresh_token': refreshToken
    })
}).then((ref) => {
    ref.json()
        .then((data) => {


            const editForm = (event) => {
                event.preventDefault();
                if (inputEmail.value == "") {
                    EmailError.innerHTML = '*pole obowiązkowe'
                } else {
                    EmailError.innerHTML = ''
                }

                if (inputName.value == "") {
                    NameError.innerHTML = '*pole obowiązkowe'
                } else {
                    NameError.innerHTML = ''
                }

                if (inputSurname.value == "") {
                    SurnameError.innerHTML = '*pole obowiązkowe'
                } else {
                    SurnameError.innerHTML = ''
                }

                if (boxPolicy.checked == false) {
                    PolicyError.innerHTML = '*potrzebna zgoda'
                } else {
                    PolicyError.innerHTML = ''
                }
                if (boxRegulations.checked == false) {
                    RegulationsError.innerHTML = '*potrzebna zgoda'
                } else {
                    RegulationsError.innerHTML = ''
                }
                if (inputEmail.value == "" || inputName.value == "" || inputSurname.value == "" || boxPolicy.checked == false || boxRegulations.checked == false) {
                    return
                } else {

                    console.log(inputBirthdate.value)
                    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/user', {
                        method: 'PATCH',
                        headers: {
                            'accept': '*/*',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + data.token
                        },
                        body: JSON.stringify({
                            "email": inputEmail.value,
                            "isBlocked": false,
                            "isActivated": true,
                            "name": inputName.value,
                            "surname": inputSurname.value,
                            "birthDate": inputBirthdate.value,
                            "phonePrefix": inputPrefix.value,
                            "phoneNumber": inputPhone.value,
                            "privacyPolicy": boxPolicy.checked,
                            "marketingAgreements": boxMarketing.checked,
                            "sellingRegulation": boxRegulations.checked
                        })
                    }).then((res) => {
                        if (res.ok) {
                            return res.json();
                        } else {
                            throw new Error('response not ok');
                        }
                    })
                        .then((data) => {
                            console.log(data);

                            const popUpWrap = document.querySelector('.popUpWrap');
                            const editPopUp = document.querySelector('.editPopUp');
                            const afterPopUp = document.querySelector('.afterPopUp');

                            const editBtn = document.querySelector('.editAccount__button');
                            const cancelBtn = document.querySelector('.editPopUp__buttons__cancel');
                            const btnX = document.querySelector('.editPopUp__exit');
                            editPopUp.classList.toggle('active');
                            afterPopUp.classList.toggle('active');

                            const afterBtn = document.querySelector('.afterPopUp__button').addEventListener('click', function () {
                                window.location.reload();
                            })


                        })
                        .catch(error => console.error('ERROR:', error));





                }
            }

            saveForm.addEventListener('submit', editForm);













        })
})

















