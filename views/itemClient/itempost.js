// Redirecter bruger hvis ikke logget ind
const user = localStorage.getItem("active");
if (!user) {
    location.href = '/index.html';
}

// Lav en vare
const postform = document.querySelector('#formPost'); // 

postform.addEventListener('submit', async (e) => { // Funtion e for event // Parser element,
    e.preventDefault(); // da default funktionen gør, at siden ikke refresher ved tryk på submit knappen.

    let id = 'id' + Date.now().toString(36); // Giver unikt id til vare for senere at kunne opdatere den specifikke vare

    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;
    let image = document.getElementById('image').value;


    const post = {
        id: id,
        title: title,
        price: price,
        category: category,
        image: image
    }

    await fetch('http://localhost:3030/post/item',{ // Endpoint defineret i backend (storage)
        method: 'POST', // Bruger metoden post
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    })
    .then((res) => res.json())
    .then((res) => { // 
        if (res) {
            window.alert(`${title} er oprettet som en vare`);
        } //
    })
    .catch(err => {
        window.alert('Noget gik galt',err);
    });
});