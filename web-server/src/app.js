const express = require('express') //Calling it to create a new express application
const path = require('path'); //determines the path that we can use
const app = express()  //Create variable to work with express

const publicDirectoryPath = path.join(__dirname, '../public') //dirname = directory name. The only dir to be exposed by the server currently.

app.set('view engine', 'hbs') //Used to get handlebars set up
app.use(express.static(publicDirectoryPath)) //finds a match

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
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
}) // we can only access on our local machine