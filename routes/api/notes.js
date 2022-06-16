const notes = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {

});

notes.delete('/', (req, res) => {

});

module.exports = notes;