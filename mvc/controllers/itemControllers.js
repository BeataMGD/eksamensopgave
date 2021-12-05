const express = require('express');
const router = express.Router();
const fs = require('fs');



// Opret en vare
router.post('/item', async (req, res) => { // Kører kun middleware på endpoint '/item', da formData.parse(options) står på samme linje
  let data = JSON.parse(fs.readFileSync('storage/itemDatabase.json'))

  data.push(req.body)
  fs.writeFile('storage/itemDatabase.json', JSON.stringify(data, null, 4), err => {
    if(err) res.send(err);
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
router.put('/update', async (req, res) => {
  let data = JSON.parse(fs.readFileSync('storage/itemDatabase.json'))

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == req.body.id) {
      data[i].title = req.body.title;
      data[i].price = req.body.price;
      data[i].category = req.body.category;
      data[i].image = req.body.image;

      fs.writeFile('storage/itemDatabase.json', JSON.stringify(data, null, 4), err => {
        if(err) res.send(err);
        res.send(data);
      })
    }
  }
});


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




module.exports = router;

