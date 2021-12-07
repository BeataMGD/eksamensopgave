
// Varer for en bestemt kategori
const list = document.getElementById('list');
const tabel = document.getElementById('tabel');
    
tabel.addEventListener('click', async (e) => {
    e.preventDefault();

    let category = document.getElementById('category').value;

    await fetch(
        'http://localhost:3030/post/category/' + category, {
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
