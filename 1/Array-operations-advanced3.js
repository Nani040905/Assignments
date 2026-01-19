// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let result

// 1. filter() employees from IT department
result=employees.filter(ele=>ele.department==="IT")
console.log(result)

// 2. map() to add:
//         netSalary = salary + 10% bonus
result=employees.map(ele=>{
    ele.netSalary=ele.salary+(ele.salary*0.1)
    return ele
})
console.log(result)

// 3. reduce() to calculate total salary payout
result=employees.reduce((total,ele)=>total+ele.salary,0)
console.log(result)

// 4. find() employee with salary 30000
result=employees.find(ele=>ele.salary===30000)
console.log(result)

// 5. findIndex() of employee "Neha"
result=employees.findIndex(ele=>ele.name==="Neha")
console.log(result)