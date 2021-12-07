
// Opret bruger
const brugerform = document.querySelector('#formBruger');

brugerform.addEventListener('submit', async (e) => { // Funtion e for event
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;
    let zipcode = document.getElementById('zipcode').value;
    let phonenumber = document.getElementById('number').value;
    let birthdate = document.getElementById('date').value;
    
    const userDetails = {
        name: name,
        email: email,
        password: password,
        country: country,
        city: city,
        address: address,
        zipcode: zipcode,
        phonenumber: phonenumber,
        birthdate: birthdate
    }

    await fetch('http://localhost:3030/user/create',{
        method: 'POST', // eller put - husk argumentation
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails)
    })
    .then(res => res.json())
    .then(data => { 
        if (data) {
            window.location.href='/login.html';
            window.alert(`${email} er oprettet i systemet`)
        } //
    })
    .catch(err => {
        window.alert('Noget gik galt',err);
    });
});