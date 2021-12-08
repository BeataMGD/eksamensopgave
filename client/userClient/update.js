// Redirecter bruger hvis ikke logget ind
const user = localStorage.getItem("active"); // Localstorage finder key value for en aktiv bruger
if (!user) { // Er brugeren ikke aktiv,
    location.href = '/index.html'; // bliver vedkommende sendt til index.html for at logge ind eller oprette en profil
}



// Opdaterer bruger informationer
const opdform = document.querySelector('#formOpd');

opdform.addEventListener('submit', async (e) => { // Funtion e for event
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

    var update = {
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

    await fetch('http://localhost:3030/user/update', { // Endpoint defineret i backend
        method: 'PUT', // bruger metoden put
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = '/surfe.html';
        window.alert('Bruger er opdateret');
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});