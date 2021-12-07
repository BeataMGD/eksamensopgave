// Redirecter bruger hvis ikke logget ind...
const user = localStorage.getItem("active");
if (!user) {
    location.href = '/index.html';
}


// Få vare frem i tabel
const tabel = document.getElementById('tabel');
const list = document.getElementById('list');
    
tabel.addEventListener('click', async (e) => {
    e.preventDefault();

    await fetch(
        'http://localhost:3030/post/items', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => { 
        // genererer en tabel til list i html
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
                <td> <img src="${e.image}" style="height:200px;width:200px"></td>
            </tr>
            `;
        })
    })
    .catch(err => {
        window.alert('Noget gik galt', err);
    });
});
