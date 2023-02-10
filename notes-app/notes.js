const fs = require('fs') //to read from the file
const chalk = require('chalk')

// Using an arrow function to make the code simpler
const addNote = (title, body) => {
    const notes = loadNotes() //load in the notes
    const duplicateNote = notes.find((note) => note.title === title) //prevents duplicate notes from being added after the method finds the title

    if (!duplicateNote) { //change the notes if the title isnt a dublipcate
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes) //save the notes
        console.log(chalk.green.inverse('New note added!'))
    } else { 
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title) //checking to see if the titles match

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep) //to save notes if the length is different
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNotes = () => {
    const notes = loadNotes() //Call to load notes to get a return back of the array of notes

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) //use find instead of filter bc filter will continue to run

    if (note) {
        console.log(chalk.yellow.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = () => {
    try { //if no error, it correctly parse the exsiting data
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) { // If the system throws an error, Returns an empty array if there is no data
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}