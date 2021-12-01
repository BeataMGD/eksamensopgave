const userDelete = document.querySelector('#deleteuser');

const user = localStorage.getItem("user");
if (!user) {
    location.href = '/login.html';
}

userDelete.addEventListener('click', (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    fetch('http://localhost:3030/user/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(res => {
        if (res) {
            localStorage.removeItem("user");
            location.href = '/signup.html';
            window.alert('Bruger er slettet')
        }
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});  
