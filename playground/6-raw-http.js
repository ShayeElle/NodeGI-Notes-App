
const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=aa8fb3bcc3ad653b8f47b90189556445&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()