const postform = document.querySelector('#formPost'); // 

// Redirecter bruger hvis ikke logget ind
const user = localStorage.getItem("active");
if (!user) {
    location.href = '/index.html';
}

// 
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
                    <td> <img src="${e.title}" style="height:200px;width:200px"></td>
                </tr>
                `;
            })
        })
        .catch(err => {
            window.alert('Noget gik galt', err);
        });
    });
