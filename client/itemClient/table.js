// Redirecter bruger hvis ikke logget ind
const user = localStorage.getItem("active"); // Localstorage finder key value for en aktiv bruger
if (!user) { // Er brugeren ikke aktiv,
    location.href = '/index.html'; // bliver vedkommende sendt til index.html for at logge ind eller oprette en profil
}


// Få vare frem i tabel
const tabel = document.getElementById('tabel');
const list = document.getElementById('list');
    
tabel.addEventListener('click', async (e) => {
    e.preventDefault();

    await fetch(
        'http://localhost:3030/post/items', {
        method: 'GET' // Laver en get-metode for generere en tabel
    })
    .then(res => res.json())
    .then(data => { 

        list.innerHTML = ` 
        <tr>
            <th> Id </th>
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
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.price}</td>
                <td>${e.category}</td>
                <td> <img src="${e.image.replace('storage/uploads/','')}" style="height:200px;width:200px"></td>
            </tr>
            `; // image's "path" hvor der står storage/uploads/ bliver "replaced" med ingenting, så billedet kan dukke op
        })
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});
