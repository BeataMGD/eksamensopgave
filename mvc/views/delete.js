const deleteform = document.querySelector('#formDelete');

// Redirecter bruger hvis ikke logget ind...
const user = localStorage.getItem("active");
if (!user) {
    location.href = '/index.html';
}


// Slet bruger
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
