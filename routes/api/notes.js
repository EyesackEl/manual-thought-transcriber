const notes = require('express').Router();

const {
    readFromFile,
    readAndAppend,
    deleteFromFile
} = require('../../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const {title, text, id} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id
        };

        readAndAppend(newNote, './db/db.json')
    }else {
        res.error('Error ')
    };
});

notes.delete('/:id', (req, res) => {
    const id = req.params.id;
    deleteFromFile(id, './db/db.json');
});

module.exports = notes;