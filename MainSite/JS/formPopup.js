//input field
let inputEmail = document.querySelector('.editPopUp__email__input')
let inputName = document.querySelector('.editPopUp__name__input')
let inputSurname = document.querySelector('.editPopUp__surname__input')

//checkbox

let boxPolicy = document.querySelector('.editPopUp__policy__checkbox')
let boxRegulations = document.querySelector('.editPopUp__regulations__checkbox')

// error
const EmailError = document.querySelector('.editPopUp__email__error')
const NameError = document.querySelector('.editPopUp__name__error')
const SurnameError = document.querySelector('.editPopUp__surname__error')
const PolicyError = document.querySelector('.editPopUp__policy__error')
const RegulationsError = document.querySelector('.editPopUp__regulations__error')

//btn form
const saveForm = document.querySelector('.editPopUp')

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
    }
}


saveForm.addEventListener('submit', editForm);
// tutaj bedzie formularz caly div albo cos a nie sam przycisk dlatego tak sie dzieje, musze ogarnac dokladnie co kiedys robilem

