// In Asynchronous programming model, one thing happens after the next
//In a non-blocking model, we can run multiple lines of code
const request = require('request') //requiring module request that we just installed

const url = 'http://api.weatherstack.com/current?access_key=aa8fb3bcc3ad653b8f47b90189556445&query=37.8267,-122.4233&units=f' //customized the units to make weather farenheiht

request({ url: url, json: true },(error, response) => { //"jason:true" we would like a request to parse this as json
    //console.log(response.body.current)
    console.log( response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
} )  //The function is what we're going to run when were getting the response back
//error incase there is one and calls with response where we can actaully actually access the response

//Geocoding: Adress -> Lat/Long -> Weather

const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hheWVlbGxlIiwiYSI6ImNsZTIxNWE1YzFxY3kzdWxnZThzMnl4YmYifQ.6gza-hZVKKsAK5Ax3AaBBA'

request ({url: geocodingURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})