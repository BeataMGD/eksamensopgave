
/*
annonceForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let title = document.getElementById('title');
    let price = document.getElementById('price');
    let category = document.getElementById('category');
    let image = document.getElementById('image');

    const post = {
        title: title,
        price: price,
        category: category,
        image: image
    }

    await fetch(
        'http://localhost:3030/user/item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(res => { // 
        if (res) {
            window.alert('Annonce er nu offentlig');
        } //
    })
    .catch(() => {
        window.alert('Noget gik galt');
    })
});    
*/

const annonceForm = document.getElementById('submitForm');

annonceForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(annonceForm);

    await fetch(
        'http://localhost:3030/itemtable', {
        method: 'POST',
        body: formData
    })
    .then(formData => {
        if(formData) {
            window.alert('Vare er oprettet');
        } else {
            window.alert('Kunne ikke oprette vare');
        }
    });
});


const refresh = document.getElementById('refresh');
const list = document.getElementById('list');

refresh.addEventListener('click', async () => {
    list.innerHTML = `
    <tr>
        <th>title</th>
        <th>price</th>
        <th>category</th>
        <th>image</th>
    </tr>
    `;

    await fetch(
        'http://localhost:3030/items', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);

        res.forEach((e) => {
            list.innerHTML += `
            <tr>
                <td>${e.title}</td>
                <td>${e.price}</td>
                <td>${e.category}</td>
                <td><img src="${e.image}" style="height:100px;width:100px"></td>
            </tr>
            `;
        });
    });
});