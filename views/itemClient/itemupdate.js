// Redirecter bruger hvis ikke logget ind...
const user = localStorage.getItem("active");
if (!user) {
    location.href = '/index.html';
}


// Opdaterer bruger informationer
const updateform = document.querySelector('#formUpdate');

updateform.addEventListener('submit', async (e) => { // Funtion e for event
    e.preventDefault();

    let id = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('title').value;
    let image = document.getElementById('image').value;

    var updateitem = {
        id: id,
        title: title,
        price: price,
        category: category,
        image: image
    }

    await fetch('http://localhost:3030/post/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateitem),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.alert('Vare er opdateret');
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});
