// Redirecter bruger hvis ikke logget ind
const user = localStorage.getItem("active"); // Localstorage finder key value for en aktiv bruger
if (!user) { // Er brugeren ikke aktiv,
    location.href = '/index.html'; // bliver vedkommende sendt til index.html for at logge ind eller oprette en profil
}


// Slet vare
const deleteform = document.querySelector('#formDelete');

deleteform.addEventListener('submit', async (e) => { // Funtion e for event
    e.preventDefault();

    let id = document.getElementById('id').value;


    await fetch('http://localhost:3030/post/delete/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.alert('Din vare er slettet');
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});
