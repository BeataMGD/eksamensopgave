const express = require('express');
const router = express.Router();
const fs = require('fs'); // fs (file systems), arbejder lokalt på disken


// nem måde at forme et sæt key/value par på // indeholder data fra form i html // XMLHttpRequest
const formData = require('express-form-data'); 

const options = {
  uploadDir: 'storage/uploads' // mappe hvor billeder bliver gemt
}


// Opret en vare
router.post('/item', formData.parse(options),async (req, res, next) => { // Kører kun middleware på endpoint '/item', da formData.parse(options) står på samme linje
  console.log(req.body)

  let data = JSON.parse(fs.readFileSync('storage/itemDatabase.json'));

  let {title, price, category} = req.body;
  let image = req.files.image.path.replace('\\', '/');

  let id = 'id' + Date.now().toString(36); // Giver unikt id til vare for senere at kunne opdatere den specifikke vare
  req.body.id = id;

  data.push({id, title, price, category, image});

  fs.writeFile('storage/itemDatabase.json', JSON.stringify(data, null, 4), err => { // hele bodyen bliver stringify'et, null værdi, endetet med 4 (ser pænere ud i .json)
    if(err) res.send(err); // error som callback funktion
    res.status(200).send(data);
  });
});


// Se tabel for vare
router.get('/items', async (req,res) => {

    fs.readFile('storage/itemDatabase.json', (err, data) => {
      if(err) res.send(err);
      res.status(200).send(data);
    });
});


// Opdater vare
router.put('/update', formData.parse(options), async (req, res) => { // Kører kun middleware på endpoint '/update', da formData.parse(options) står på samme linje
  let data = JSON.parse(fs.readFileSync('storage/itemDatabase.json'));

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == req.body.id) {
      data[i].title = req.body.title;
      data[i].price = req.body.price;
      data[i].category = req.body.category;
      data[i].image = req.files.image.path.replace('\\', '/');

      fs.writeFile('storage/itemDatabase.json', JSON.stringify(data, null, 4), err => {
        if(err) res.send(err);
        res.send(data);
      })
    }
  }
});


// Slet vare
router.delete('/delete/:id', async (req, res) => {
  let data = JSON.parse(fs.readFileSync('storage/itemDatabase.json'))

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == req.params.id) { 
      data.splice(i, 1) // Sletter 1 element fra arrayet på det index plads der passer til vare id'et

      fs.writeFile('storage/itemDatabase.json', JSON.stringify(data, null, 4), err => {
        if(err) res.send(err);
        res.send(data);
      })
    }
  }
});


// Se varer for bestemt kategori
router.get('/category/:category', async (req,res) => {
  let data = JSON.parse(fs.readFileSync('storage/itemDatabase.json'));

  res.send(data.filter(e => req.params.category === e.category));
});



module.exports = router;

