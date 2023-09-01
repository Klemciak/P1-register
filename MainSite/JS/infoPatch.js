

document.addEventListener("DOMContentLoaded", (e) => {
    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/user', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    }).then((res) => {
        console.log(res)
        res.json()
    })
        .catch(error => console.log('ERROR'))


})




document.addEventListener("DOMContentLoaded", (e) => {
    fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/user', {
        method: 'PATCH',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: {
            "email": "test@gmail.com",
            "isBlocked": false,
            "isActivated": false,
            "name": "Jhon",
            "surname": "Doe",
            "birthDate": "2000-02-01",
            "phonePrefix": "+48",
            "phoneNumber": 100000000,
            "privacyPolicy": true,
            "marketingAgreements": true,
            "sellingRegulation": true
        }
    }).then((res) => console.log(res))



})






//----------------------------------------------


// fetch('http://api.ultimate.systems/public/index.php/api/v1/auth/token/refresh', {
//     method: 'POST',
//     headers: {
//         'accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         'token': data.token,
//         'refresh_token': data.refresh_token
//     })
// }).then((ref) => {
//     console.log(ref)
//     ref.json()
//         .then((data) => {
//             console.log(data)
//         })
// })
