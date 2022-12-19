const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => { 
    return "Your notes..." 
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // checking for notes with duplicate title
    // const duplicateNotes = notes.filter( function (note) { 
    //     return note.title === title 
    // })
    // const duplicateNotes = notes.filter((note) => note.title === title )
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note added!'))
        // console.log(notes)
    } else {
        console.log(chalk.inverse.red('Note title already taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title )
    if(notes.length > notesToKeep.length) {
        console.log(chalk.inverse.green("Note removed!"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.inverse.red("No note found!"))
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes..."))
    notes.forEach((note) => {
        console.log(note.title,"\n")
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
        if(note) {
            console.log(chalk.inverse(note.title))
            console.log("\t",note.body)
        } else {
            console.log(chalk.inverse.red("Note not found!!"))
        }
}

const saveNotes = (notes) => {
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}