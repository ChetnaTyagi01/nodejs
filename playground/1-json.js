const fs = require('fs')

//--------------------------storing data with json-------------------------
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) // returns json data for an object
// console.log(bookJSON) // bookJSON is a string

// const parsedData = JSON.parse(bookJSON);// returns the parsed json
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // returns binary data
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)



//--------------------Challenge--------------------------

// load and parse the json data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

// Change the name and age property using your info
data.name = "Chetna"
data.age = 27

// stringify the changed object and ovewrite original data
updatedData = JSON.stringify(data)
fs.writeFileSync('1-json.json', updatedData)