// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];
let result

// 1. filter() all credit transactions
result=transactions.filter(ele=>ele.type==="credit")
console.log(result)

// 2. map() to extract only transaction amounts
result=transactions.map(ele=>ele.amount)
console.log(result)

// 3. reduce() to calculate final account balance
result=transactions.reduce((balance,transaction)=>{
    if (transaction.type==="credit"){
        return balance + transaction.amount
    }
    else{
        return balance - transaction.amount
    }
},0)
console.log(result)

// 4. find() the first debit transaction
result=transactions.find(ele=>ele.type==="debit")
console.log(result)

// 5. findIndex() of transaction with amount 10000
result=transactions.findIndex(ele=>ele.amount===10000)
console.log(result)