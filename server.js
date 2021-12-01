// Opret api med node.js og express.js

const express = require('express');
const cors = require('cors');

const app = express(); 

app.use(express.json()); // Comes as a json string
app.use(cors());


const PORT = 3030; 

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT); // Kører npm start i consolen og får: Server listening on 3030
});


const userController = require('./mvc/controllers/modelsControllers.js');

app.use('/user', userController);

app.use(express.static('./mvc/views'));


// Annonce

const formData = require('express-form-data');

app.use(express.static('./mvc/views/userItem'));

app.use('/', express.static('userItem'));

app.use(express.static('./db/uploads'));

const options = {
    uploadDir: './db/uploads'
};

const products = [];

app.post('/itemtable', formData.parse(options), (req, res, next) => { // Kører middleware på endpoint: /item
  let {title, price, category} = req.body;
  let image = req.files.image.path.replace('\\','/');

  products.push({title, price, category, image});
  
  res.send();
});

app.get('/items', (req, res) => {
    res.json(products);
});











/*
// Test for at se om api virker:
// Vi kører localhost i postman
app.use('/', function(req, res) {
    res.send('Api works'); // I browser står der så: Api works
});
// Det virker, ja tak

/*
app.get('/table/', (req, res) => {
    res.sendFile(__dirname + '/frontpage.html');
});
*/


// !!! Skriv endpoints for neden 
// Serveren er middleware for de forskellige js filer i mappen 
// Brug: const 'navnet' = require ("./mappe/filnavn.js")
// endpoints er: app.use('/endpointnavn',navnet);

