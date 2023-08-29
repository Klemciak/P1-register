document.addEventListener("DOMContentLoaded", (e) => {
    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/users?filter%5Bis_activated%5D=ACTIVE%2CINACTIVE&sort%5Bid%5D=asc&sort%5Bname%5D=asc&sort%5Bsurname%5D=asc&sort%5Bbirth_date%5D=asc&page=1&perPage=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        res.json()
            .then((users) => {
                let array = [...users.data]
                array.forEach(item => {
                    const persons = document.querySelector('.persons');

                    let person = document.createElement('div');
                    person.className = 'person';


                    let personDot = document.createElement('div');
                    if (item.is_activated === false) {
                        personDot.className = 'person__dot1';
                        personDot.innerHTML = 'OFF'
                    } else {
                        personDot.className = 'person__dot2';
                        personDot.innerHTML = 'ON'
                    }

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
