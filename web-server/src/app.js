const express = require('express') //Calling it to create a new express application
const path = require('path'); //determines the path that we can use
const app = express()  //Create variable to work with express

// Define paths for Express config & dirname = directory name. The only dir to be exposed by the server currently.
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => { //express goes off, gets the view and render into html and make sure html gets back to the requester 
    res.render('index', {
        title: 'Weather',
        name: 'Shaye Ellerbe'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Shaye Ellerbe'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Contact us if you need help.'
    })
})



app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is sunny',
        location: 'Charlotte'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
}) // we can only access on our local machine