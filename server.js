// Opret api med node.js og express
const express = require('express');
const cors = require('cors'); // Flere servere kan til tilgå dataen
// Middleware
const fs = require('fs'); // tilgår JSON data
const bodyparser = require('body-parser'); // tilgår JSON data


const app = express(); 

app.use(express.json()); // Kommer som json string
app.use(bodyparser.json()) // Fjerner strings
app.use(cors());


const PORT = 3030; 

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT); // Kører npm start i consolen og får: Server listening on 3030
});


// Routes
const userController = require('./server/userControllers.js');
const itemController = require('./server/itemControllers.js');

// Endpoints
app.use('/user', userController);
app.use('/post', itemController);


// Statisk mappe som indeholder html filer
app.use(express.static('./client'));
app.use(express.static('./client/userClient'));
app.use(express.static('./client/itemClient'));
app.use(express.static('./storage/uploads'));



module.exports = app;