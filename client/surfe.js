// Redirecter bruger hvis ikke logget ind...
const user = localStorage.getItem("active");
if (!user) {
    location.href = '/index.html';
}


// Sletter brugeren
const userDelete = document.querySelector('#deleteuser');

userDelete.addEventListener('click', (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("active"));

    fetch('http://localhost:3030/user/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
        if (data) {
            localStorage.removeItem("active");
            window.location.href = '/index.html';
            window.alert('Bruger er slettet');
        }
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});  



// Logger ud
const userLogout = document.querySelector('#logoutuser');

userLogout.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (user) {
        window.localStorage.clear();
        window.location.href = '/index.html';
        window.alert('Bruger er logget ud');
    };
});

