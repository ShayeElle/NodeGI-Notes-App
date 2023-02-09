// You need to use the require function to use the packets
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command to add new notes
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title', //Allows us to describe that option
            demandOption: true, //To make title required
            type: 'string'//Making sure that the value is always a string for title
        },
        body: {
            describe: 'Note body',
            demandOption: true, //To make body be required
            type: 'string' //Making sure that the value is always a string for body
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command that removes the note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command that list out all of the notes
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command that will read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse() //Goes through the process of parsing the arguments with all of the configuration details you've provided with your yargs command calls up above.