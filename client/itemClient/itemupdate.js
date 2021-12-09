// Redirecter bruger hvis ikke logget ind
const user = localStorage.getItem("active"); // Localstorage finder key value for en aktiv bruger
if (!user) { // Er brugeren ikke aktiv,
    location.href = '/index.html'; // bliver vedkommende sendt til index.html for at logge ind eller oprette en profil
}


// Opdaterer vare informationer
const updateform = document.querySelector('#formUpdate');

updateform.addEventListener('submit', async (e) => { // Funtion e for event
    e.preventDefault();

    const formData = new FormData(updateform); // former dataen fra <form>

    await fetch('http://localhost:3030/post/update', {
        method: 'PUT',
        body: formData
    })
    .then(res => res.json())
    .then((res) => {
        if (res) {
            console.log(res);
            window.alert('Vare er opdateret');
        }
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});
