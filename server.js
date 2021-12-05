// Opret api med node.js og express
const express = require('express');
const cors = require('cors'); // Flere servere kan til tilgå dataen
// Middleware
const fs = require('fs'); // tilgår JSON data
const bodyparser = require('body-parser'); // tilgår JSON data

const formData = require('express-form-data');

const app = express(); 

app.use(express.json()); // Kommer som json string
app.use(bodyparser.json()) // Fjerner strings
app.use(cors());


const PORT = 3030; 

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT); // Kører npm start i consolen og får: Server listening on 3030
});


// Routes
const userController = require('./mvc/controllers/userControllers.js');
const itemController = require('./mvc/controllers/itemControllers.js');

// Endpoints
app.use('/user', userController);
app.use('/post', itemController);


// Statisk mappe indeholdende html filer
app.use(express.static('./mvc/views'));
app.use(express.static('./storage/uploads'));