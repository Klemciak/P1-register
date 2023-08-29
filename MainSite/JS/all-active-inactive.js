const allButton = document.querySelector('.search__all');
const onButton = document.querySelector('.search__active');
const offButton = document.querySelector('.search__inactive');

const OffDot = document.getElementsByClassName('person__dot1')
const onDot = document.getElementsByClassName('person__dot2')

function onPersons() {
    let onDotArr = [...onDot];
    let OffDotArr = [...OffDot];
    onDotArr.forEach(element => {
        element.parentNode.style.display = 'grid';
    });
    OffDotArr.forEach(element => {
        element.parentNode.style.display = 'none';
    });

}

function offPersons() {
    let onDotArr = [...onDot];
    let OffDotArr = [...OffDot];
    onDotArr.forEach(element => {
        element.parentNode.style.display = 'none';
    });
    OffDotArr.forEach(element => {
        element.parentNode.style.display = 'grid';
    });
}

function allPersons() {
    let onDotArr = [...onDot];
    let OffDotArr = [...OffDot];
    onDotArr.forEach(element => {
        element.parentNode.style.display = 'grid';
    });
    OffDotArr.forEach(element => {
        element.parentNode.style.display = 'grid';
    });
}


offButton.addEventListener('click', offPersons)
onButton.addEventListener('click', onPersons)
allButton.addEventListener('click', allPersons)
