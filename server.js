// Opretter restful api med node.js og express.js

const express = require('express');
// app uses express
const app = express();

// Comes as a json string
app.use(express.json());

const port = 3030; 
// Server listening on port 3030
app.listen(port, () => {
    console.log('Server listening on ' + port); // Kører npm start i consolen og får: Server listening on 3030
});







// Test for at se om Restful api virker:
// Vi kører localhost i postman
app.use('/', function(req, res) {
    res.send('Api works'); // I browser står der så: Api works
});




/*

Controllers
const userController = require("./src/controllers/user-controller");

const PORT = process.env.PORT || 3000;

Middleware - endnu et fedt term      <----------------------------- !
app.use(express.static("./src/views"));
// Kommer som string -> JSON
app.use(express.json());

Routes
app.use("/users", userController);

*/