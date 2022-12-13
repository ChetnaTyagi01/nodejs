// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Chetna.')
// fs.appendFileSync('notes.txt', ' This is nodejs hands-on project.')

const utils = require('./utils.js') // runs utils.js
const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')

console.log(utils.name)
console.log(utils.add(4, 2))

var msg = getNotes();
console.log(msg)

console.log(validator.isEmail('test@example.com'))
console.log(validator.isURL('https://www.google.com'))

var str = chalk.bold.green("Success")
var strInverse = chalk.bold.inverse.green("Success")
console.log(str)
console.log(strInverse)