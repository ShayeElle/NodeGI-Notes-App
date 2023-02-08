const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

//convert an object and convert it to JSON 
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

//JSON Parse to take JSON data and convert it to an object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.au)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = data.dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)