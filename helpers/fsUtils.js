const fs = require('fs');
const util = require('util');


const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const deleteFromFile = (id, file) =>{
  console.log('test2')
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      console.log(parsedData[2]);
      console.log(parsedData[1]);
      console.log(parsedData[0]);
      console.log(id)
      for (let i=0; i < parsedData.length; i++) {
        if (parsedData[i].id == id) {
          console.log(parsedData);
          parsedData.splice(i, 1);
          console.log(parsedData);
        } 
      }
      writeToFile(file, parsedData)
    }
  } )
}

module.exports = {readFromFile, writeToFile, readAndAppend, deleteFromFile};
