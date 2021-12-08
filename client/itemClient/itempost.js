// Redirecter bruger hvis ikke logget ind
const user = localStorage.getItem("active"); // Localstorage finder key value for en aktiv bruger
if (!user) { // Er brugeren ikke aktiv,
    location.href = '/index.html'; // bliver vedkommende sendt til index.html for at logge ind eller oprette en profil
}

// Lav en vare
const postform = document.querySelector('#formPost'); // Finder id'et for formen som indeholder de forskellige inputs i itempost.html

postform.addEventListener('submit', async (e) => { // Funtion e for event // Parser element,
    e.preventDefault(); // da default funktionen gør, at siden ikke refresher ved tryk på submit knappen.


    const formData = new FormData(postform); // former dataen fra <form>

    await fetch('http://localhost:3030/post/item',{ // Endpoint defineret i backend
        method: 'POST', // Bruger metoden post
        body: formData
    })

    .then((res) => res.json())
    .then((res) => { // 
        if (res) {
            window.alert('Din vare er oprettet');
        } //
    })
    .catch(err => {
        window.alert('Noget gik galt',err);
    }); 
});