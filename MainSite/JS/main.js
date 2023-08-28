
// 
//   show Popup 
// 

const popUpWrap = document.querySelector('.popUpWrap');
const editPopUp = document.querySelector('.editPopUp');
const afterPopUp = document.querySelector('.afterPopUp');

const editBtn = document.querySelector('.editAccount__button');
const cancelBtn = document.querySelector('.editPopUp__buttons__cancel');
const btnX = document.querySelector('.editPopUp__exit');

const showHidePopup = (e) => {
    popUpWrap.classList.toggle('active');
    console.log('działa?');
}

editBtn.addEventListener('click', showHidePopup);
btnX.addEventListener('click', showHidePopup);
cancelBtn.addEventListener('click', showHidePopup);

//
//  add persons
// 

// DOMContentLoaded
{/* <div class="person">
                <div class="person__dot">NU</div>
                <span class="person__name">Marek</span>
                <span class="person__surname">Rostowski</span>
                <span class="person__email">m.rostowski@mail.pl</span>
                <span class="person__date">20.12.1988</span>
            </div> */}


document.addEventListener("DOMContentLoaded", (e) => {


    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/users?filter%5Bis_activated%5D=ACTIVE%2CINACTIVE&sort%5Bid%5D=asc&sort%5Bname%5D=asc&sort%5Bsurname%5D=asc&sort%5Bbirth_date%5D=asc&page=1&perPage=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        console.log(res)
        res.json()
            .then((users) => {
                console.log(users.data)
                let array = [...users.data]
                array.forEach(item => {
                    const persons = document.querySelector('.persons');

                    let person = document.createElement('div');
                    person.className = 'person';


                    let personDot = document.createElement('div');
                    personDot.className = 'person__dot';
                    personDot.innerHTML = item.id


                    let personName = document.createElement('span');
                    personName.className = 'person__name';
                    personName.innerHTML = item.name


                    let personSurname = document.createElement('span');
                    personSurname.className = "person__surname";
                    personSurname.innerHTML = item.surname


                    let personEmail = document.createElement('span');
                    personEmail.className = "person__email";
                    personEmail.innerHTML = item.email


                    let personDate = document.createElement('span');
                    personDate.className = "person__date";
                    personDate.innerHTML = item.birth_date






                    persons.appendChild(person);

                    person.appendChild(personDot);
                    person.appendChild(personName);
                    person.appendChild(personSurname);
                    person.appendChild(personEmail);
                    person.appendChild(personDate);
                })


            })
    }).catch(error => console.log('ERROR'))

})

