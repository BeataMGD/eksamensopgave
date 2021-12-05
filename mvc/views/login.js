const loginform = document.querySelector('#formLogin');

// Bruger log ind
    loginform.addEventListener('submit', async (e) => { // Funtion e for event
        e.preventDefault();

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        
        const user = {
            email: email,
            password: password
        }
        
        await fetch('http://localhost:3030/user/login',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(res => {
            if(res) {
                localStorage.setItem("active", JSON.stringify(user));
                window.location.href = '/surfe.html';
                window.alert(`Velkommen ${email}`);
            } else {
                window.alert('Kan ikke logge ind');
            }
        })
        .catch(err => {
            window.alert('Noget gik galt', err);
        });
    });