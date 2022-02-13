const router = require('express').Router();
const res = require('express/lib/response');
const fs = require('fs');
let note = require('../db/db.json');


//request to notes
router.get('/notes', (req, res) => {
    //reading db.son pull data as a JSON
    note = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    return res.json(note)
});

router.post('/notes', (req, res) => {

    let newNote = { title: req.body.title, text: req.body.text, id: Math.floor(Math.random()*1000)
    }
    note.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(note))
    res.json(note);
});
module.exports = router;