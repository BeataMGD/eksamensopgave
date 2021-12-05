const opdform = document.querySelector('#formOpd');

// Redirecter bruger hvis ikke logget ind...
const user = localStorage.getItem("active");
if (!user) {
    location.href = '/index.html';
}




// Opdaterer bruger informationer
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
    
        await fetch('http://localhost:3030/user/update', {
            method: 'PUT',
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


/*
// Se info om brugeren 

const info = document.getElementById('brugerInfo');
    
    tabel.addEventListener('click', async (e) => {
        e.preventDefault();

        await fetch(
            'http://localhost:3030/user/info', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => { 
            // genererer en tabel til list i html
            list.innerHTML = ` 
            <tr>
                <th> Title </th>
                <th> Price </th>
                <th> Category </th>
                <th> Image </th>
            </tr>
            `;

            // For each e (element) fungerer som et for loop (kører igennem alle elementer) 
            data.forEach((e) => { // tilføjer til list i html
                list.innerHTML += `
                <tr>
                    <td>${e.title}</td>
                    <td>${e.price}</td>
                    <td>${e.category}</td>
                    <td> <img src="${e.title}" style="height:100px;width:100px"></td>
                </tr>
                `;
            })
        })
        .catch(err => {
            window.alert('Noget gik galt', err);
        });
    });
*/