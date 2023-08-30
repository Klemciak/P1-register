const imgName = document.querySelector('.sort__name__dart')
const imgSurname = document.querySelector('.sort__surname__dart')
const imgEmail = document.querySelector('.sort__email__dart')
const imgDate = document.querySelector('.sort__date__dart')



imgName.addEventListener("click", (e) => {
    e.preventDefault();
    const deletePersons = document.querySelector('main')
    const deletePerson = document.querySelector('.persons')
    deletePersons.removeChild(deletePerson);
    let persons = document.createElement('div');
    persons.className = 'persons';
    deletePersons.appendChild(persons);
    imgSurname.classList.remove('upside-down');
    imgName.classList.add('upside-down');
    imgEmail.classList.remove('upside-down');
    imgDate.classList.remove('upside-down');


    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/users?filter%5Bis_activated%5D=ACTIVE%2CINACTIVE&sort%5Bid%5D=asc&sort%5Bname%5D=asc&sort%5Bsurname%5D=asc&sort%5Bbirth_date%5D=asc&page=1&perPage=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        res.json()
            .then((users) => {
                let array = [...users.data]

                array.sort((a, b) => {
                    if (a.name === null) {
                        return 1;
                    }
                    if (b.name === null) {
                        return -1;
                    }

                    An = a.name.toLowerCase();
                    Bn = b.name.toLowerCase();
                    if (An < Bn) { return -1; }
                    if (An > Bn) { return 1; }
                    return 0;

                });


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








imgSurname.addEventListener("click", (e) => {
    e.preventDefault();
    const deletePersons = document.querySelector('main')
    const deletePerson = document.querySelector('.persons')
    deletePersons.removeChild(deletePerson);
    let persons = document.createElement('div');
    persons.className = 'persons';
    deletePersons.appendChild(persons);
    imgSurname.classList.add('upside-down');
    imgName.classList.remove('upside-down');
    imgEmail.classList.remove('upside-down');
    imgDate.classList.remove('upside-down');


    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/users?filter%5Bis_activated%5D=ACTIVE%2CINACTIVE&sort%5Bid%5D=asc&sort%5Bname%5D=asc&sort%5Bsurname%5D=asc&sort%5Bbirth_date%5D=asc&page=1&perPage=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        res.json()
            .then((users) => {
                let array = [...users.data]

                array.sort((a, b) => {
                    if (a.surname === null) {
                        return 1;
                    }
                    if (b.surname === null) {
                        return -1;
                    }

                    An = a.surname.toLowerCase();
                    Bn = b.surname.toLowerCase();
                    if (An < Bn) { return -1; }
                    if (An > Bn) { return 1; }
                    return 0;

                });


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




imgEmail.addEventListener("click", (e) => {
    e.preventDefault();
    const deletePersons = document.querySelector('main')
    const deletePerson = document.querySelector('.persons')
    deletePersons.removeChild(deletePerson);
    let persons = document.createElement('div');
    persons.className = 'persons';
    deletePersons.appendChild(persons);
    imgSurname.classList.remove('upside-down');
    imgName.classList.remove('upside-down');
    imgEmail.classList.add('upside-down');
    imgDate.classList.remove('upside-down');


    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/users?filter%5Bis_activated%5D=ACTIVE%2CINACTIVE&sort%5Bid%5D=asc&sort%5Bname%5D=asc&sort%5Bsurname%5D=asc&sort%5Bbirth_date%5D=asc&page=1&perPage=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        res.json()
            .then((users) => {
                let array = [...users.data]

                array.sort((a, b) => {
                    An = a.email.toLowerCase();
                    Bn = b.email.toLowerCase();
                    if (An < Bn) { return -1; }
                    if (An > Bn) { return 1; }
                    return 0;
                });


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







imgDate.addEventListener("click", (e) => {
    e.preventDefault();
    const deletePersons = document.querySelector('main')
    const deletePerson = document.querySelector('.persons')
    deletePersons.removeChild(deletePerson);
    let persons = document.createElement('div');
    persons.className = 'persons';
    deletePersons.appendChild(persons);
    imgSurname.classList.remove('upside-down');
    imgName.classList.remove('upside-down');
    imgEmail.classList.remove('upside-down');
    imgDate.classList.add('upside-down');


    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/users?filter%5Bis_activated%5D=ACTIVE%2CINACTIVE&sort%5Bid%5D=asc&sort%5Bname%5D=asc&sort%5Bsurname%5D=asc&sort%5Bbirth_date%5D=asc&page=1&perPage=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        res.json()
            .then((users) => {
                let array = [...users.data]

                array.sort((a, b) => {
                    return new Date(a.birth_date) - new Date(b.birth_date);
                })


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

