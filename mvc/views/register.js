const form = document.querySelector('form');

form.addEventListener('submit', (e) => { // Funtion e for event
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const zipcode = document.getElementById('zipcode').value;
    const phonenumber = document.getElementById('number').value;
    const birthdate = document.getElementById('date').value;

    const userDetails = {
        email: email,
        password: password,
        name: name,
        country: country,
        city: city,
        address: address,
        zipcode: zipcode,
        phonenumber: phonenumber,
        birthdate: birthdate
    };

    fetch('http://localhost:3000/login',{
        method: 'POST', // eller put - husk argumentation
        body: JSON.stringify(userDetails),
        headers: {
            'Content-Type': 'application/json', // ved jeg ikke hbad betyder
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data),
        localStorage.setItem('userDetails', JSON.stringify(data)),
        window.location='register.html'
    })
    .catch ((err) => {
        console.log("Der skete en fejl", err);
    });
});














/*

submitKnap.addEventListener('click', () => {
    localStorage.setItem('email', mailInput.value);
    localStorage.setItem('password', passInput.value);
    nameDisplayCheck()
});

forgetKnap.addEventListener('click', () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    nameDisplayCheck()
});



// Brug følgende til at skrive en velkomst til brugeren (navn) for at vise at registrerings- og login system virker

function nameDisplayCheck() {
    if(localStorage.getItem('email', 'password')) {
        let mail = localStorage.getItem('email', 'password');
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    } else {
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    };
};
document.body.onload = nameDisplayCheck

*/