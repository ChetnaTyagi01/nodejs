// ----------------using node core modules--------------------------
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Chetna.')
// fs.appendFileSync('notes.txt', ' This is nodejs hands-on project.')

// const utils = require('./utils.js') // runs utils.js
const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { string } = require('yargs')

// console.log(utils.name)
// console.log(utils.add(4, 2))

// var msg = getNotes();
// console.log(msg)

// --------------------using npm packages-------------------------------------

// console.log(validator.isEmail('test@example.com'))
// console.log(validator.isURL('https://www.google.com'))

// var str = chalk.bold.green("Success")
// var strInverse = chalk.bold.inverse.green("Success")
// console.log(str)
// console.log(strInverse)

// ---------------------taking command line argument--------------------------
// argv - argument vector - an array that contains all the arguments provided
// console.log(process.argv)

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }


// ------------------------using yargs npm package---------------------------

// comparing process and yargs
// console.log(process.argv)
// console.log(yargs.argv)

// customize yargs version
// yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // required to be provided at command line in order for the command to work correctly
            type: 'string' // if type is not provided by default boolean type is set if we don't provide any value
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Adding a new note!', argv)
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing the note!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})

yargs.parse()
// console.log(yargs.argv)