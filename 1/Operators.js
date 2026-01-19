// Initial data:
//         let totalAmount = 0;

// 🎯 Tasks
//   1. Add ₹500 to the total
//   2. Add ₹1200 to the total
//   3. Apply a ₹200 discount
//   4. Add 18% GST
//   5. Print the final bill amount

function bill(total){
    total+=500
    total+=1200
    total-=200
    total+=total*0.18
    return total
}

let totalBill=bill(0)
console.log("Total bill is ",totalBill)

