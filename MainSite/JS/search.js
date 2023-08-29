const search = document.querySelector('.search__form');
let inputSearch = document.querySelector('.search__form__input');


const searchPersons = (e) => {
    e.preventDefault();
    let inputSearchText = inputSearch.value.toLocaleLowerCase();
    let NameList = document.querySelectorAll('.person__name, .person__surname');
    let person = [...NameList]
    console.log(person)
    let personFilter = person.filter(NameList => NameList.textContent.toLowerCase().includes(inputSearchText));
    person.forEach(p => p.parentNode.style.display = "none")
    personFilter.forEach(p => p.parentNode.style.display = "grid")
    inputSearch.value = "";

}

search.addEventListener('submit', searchPersons);