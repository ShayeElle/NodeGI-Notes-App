// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name, //Same as using name: name, since the variable is defined above
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

//Object destructuring: When you have an object and you want to access properties from it

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salPrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
  console.log(type, label, stock)
}

transaction('order', product)