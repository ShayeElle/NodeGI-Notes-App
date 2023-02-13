// setTimeout(() => { //there is a single callback function and that is the function we define and pass in as an argument to setTimeout.
//     console.log('Two seconds are up')
// }, 2000) 

// const names = ['Shaye', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => { //Callback pattern
//     setTimeout(() => {
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }

//     callback(data)
// }, 2000)
// }

//  geocode('Charlotte', (data) => {
//     console.log(data)
//  })


 const add = (a,b, callback) =>{
    setTimeout(() => { //to simulate the asynchronous process
        callback(a + b)
    }, 2000)
 }

 add(1,4,(sum) => {
    console.log(sum) //Print 5
 })