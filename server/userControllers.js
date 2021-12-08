const express = require('express');
const router = express.Router();
const fs = require('fs'); // fs (file systems), arbejder lokalt på disken



// Opret bruger
router.post('/create', (req, res) => {
  let data = JSON.parse(fs.readFileSync('storage/userDatabase.json'))

  data.push(req.body)

  fs.writeFile('storage/userDatabase.json', JSON.stringify(data, null, 4), err => {
    if(err) res.send(err);
    res.status(200).send(data);
  });
});


// Slet bruger
router.delete('/delete', (req, res) => {
  let data = JSON.parse(fs.readFileSync('storage/userDatabase.json')) // JSON parse læser json og konverterer til js objekt // Henviser til .json fil med data om bruger

  res.send(data.filter(e => req.body.email != e.email));
});


// Log ind
router.post('/login', (req, res) => {
  let data = JSON.parse(fs.readFileSync('storage/userDatabase.json'));

  res.send(data.filter(e => req.body.email === e.email));
});


// Opdater bruger
router.put('/update', (req, res) => {
  let data = JSON.parse(fs.readFileSync('storage/userDatabase.json'))

  for (let i = 0; i < data.length; i++) { // Tager længden af data, altså .json filen,
    if (data[i].email == req.body.email) { // finder indexet, genkender den pågældende mail som forbliver uændret så de andre parametre kan opdateres
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
