// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let result
// 1. filter() to get only inStock products
result=cart.filter(ele=>ele.inStock===true)
console.log(result)

// 2. map() to create a new array with:  { name, totalPrice }
result=cart.map(ele=>{
    return{
        name:ele.name,
        totalPrice:ele.price*ele.quantity
    }
})
console.log(result)

// 3. reduce() to calculate grand total cart value
result=cart.reduce((grandTotal,obj)=>grandTotal+(obj.price*obj.quantity),0)
console.log(result)

// 4. find() to get details of "Mouse"
result=cart.find(ele=>ele.name==="Mouse")
console.log(result)

// 5. findIndex() to find the position of "Keyboard"
result=cart.findIndex(ele=>ele.name==="Keyboard")
console.log(result)

