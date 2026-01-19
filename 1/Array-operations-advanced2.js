// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];
let result

// 1. filter() students who passed (marks ≥ 40)
result=students.filter(ele=>ele.marks>=40)
console.log(result)

// 2. map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
result=students.map(ele=>{
    if (ele.marks>=90){
        ele.grade="A"
    }
    else if (ele.marks>=75 && ele.marks<90){
        ele.grade="B"
    }
    else if (ele.marks>=60 && ele.marks<75){
        ele.grade="C"
    }
    else{
        ele.grade="D"
    }
    return ele
})
console.log(result)

// 3. reduce() to calculate average marks
result=students.reduce((total,obj)=>total+obj.marks,0)/students.length
console.log(result)

// 4. find() the student who scored 92
result=students.find(ele=>ele.marks===92)
console.log(result)

// 5. findIndex() of student "Kiran"
result=students.findIndex(ele=>ele.name==="Kiran")
console.log(result)
