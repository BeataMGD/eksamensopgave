// Se sonnys og tag et kig på router --- kilder gemt i bogmærker
// Skriv noter til dette og brug gerne andre navne, strukturer, og fil / mappe organisationer
// Slet det ikke relevante + vurder hvad der er nødvendigt og ikke nødvendigt for app'en

const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const db = require('../../db/userdb');
const loginModel = require('../models/userlogin');

router.post('/create', (req, res) => {
  const user = new userModel(req.body.name, req.body.email, req.body.password, req.body.country, req.body.city, req.body.address, req.body.zipcode, req.body.phonenumber, req.body.birthdate);
  db.saveUser(user);
  res.status(200).send(true);
});

router.delete('/delete', (req, res) => {
  const user = new userModel(req.body.name, req.body.email, req.body.password, req.body.country, req.body.city, req.body.address, req.body.zipcode, req.body.phonenumber, req.body.birthdate);
  db.deleteUser(user);
  res.status(200).send(true);
});

router.post('/login', (req, res) => {
  const user = new loginModel(req.body.email, req.body.password);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(404).send(false);
    }
  } else {
    res.status(404).send(false);
  };
});


// Vare oprettelse
/*
const formData = require('express-form-data');
const postModel = require('../models/postcreate');

const options = {
    uploadDir: '../views/userItem/uploads'
};

const products = [];

router.use(express.static('../views/userItem'));

router.use(express.static('../views/userItem/uploads'));

router.use(formData.parse(options));

router.post('/item', (req, res) => { // Kører middleware på endpoint: /item
    const user = new postModel(req.body.title, req.body.price, req.body.category, req.body.image);
    
    products.push(user);

    db.savePost(user);

    res.status(200).send(true);
});
*/


module.exports = router;