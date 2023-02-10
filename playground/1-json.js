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

//we read the file in getting our binary daya
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = data.dataBuffer.toString() //converted that data into a standard string
const data = JSON.parse(dataJSON) //parsed that JSON data into an object
console.log(data.title) //accessed a prperty from it