const express = require('express');
const router = express.Router();
const fs = require('fs');

const userModel = require('../models/usercreate'); // Henviser hvortil man finder fil med informationer om brugeren - kræves
const loginModel = require('../models/userlogin'); // Henviser hvortil man finder fil med informationer om brugeren
const db = require('./userFile'); // Henviser til fil som hjælper med at ændre på informationer - fungerer som en bro mellem controllers og .json


// Opret bruger
router.post('/create', (req, res) => {
  const usercreate = new userModel(req.body.name, req.body.email, req.body.password, req.body.country, req.body.city, req.body.address, req.body.zipcode, req.body.phonenumber, req.body.birthdate);
  db.saveUser(usercreate);
  res.status(200).send(true);
});

// Slet bruger
router.delete('/delete', (req, res) => {
  const userdelete = new userModel(req.body.name, req.body.email, req.body.password, req.body.country, req.body.city, req.body.address, req.body.zipcode, req.body.phonenumber, req.body.birthdate);
  db.deleteUser(userdelete);
  res.status(200).send(true);
});


// Log ind
router.post('/login', (req, res) => {
  const login = new loginModel(req.body.email, req.body.password);
  const found = db.findUser(login);
  if (found) {
    if (login.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(404).send(false);
    }
  } else {
    res.status(404).send(false);
  };
});




// Get user fra local storage og post det oplysningerne på websiden
router.get('/userdetails', async (req,res) => {
  fs.readFile('storage/userDatabase.json', (err, data) => {
    if(err) res.send(err);
    res.send(data);
  });
});


// Opdater bruger
router.put('/update', (req, res) => {
  let data = JSON.parse(fs.readFileSync('storage/userDatabase.json'))

  for (let i = 0; i < data.length; i++) {
    if (data[i].email == req.body.email) {
      data[i].name = req.body.name;
      data[i].password = req.body.password;
      data[i].country = req.body.country;
      data[i].city = req.body.city;
      data[i].address = req.body.address;
      data[i].zipcode = req.body.zipcode;
      data[i].phonenumber = req.body.phonenumber;
      data[i].birthdate = req.body.birthdate;

      fs.writeFile('storage/userDatabase.json', JSON.stringify(data, null, 4), err => {
        if(err) res.send(err);
        res.send(data);
      })
    }
  }
});



module.exports = router;
