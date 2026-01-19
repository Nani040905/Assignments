// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

const courses = ["javascript", "react", "node", "mongodb", "express"];
let result
//    1. filter() courses with name length > 5
result=courses.filter(ele=>ele.length>5)
console.log(result)

//    2. map() to convert course names to uppercase
result=courses.map(ele=>ele.toUpperCase())
console.log(result)

//    3. reduce() to generate a single string(not mandatory):
//              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
result=courses.reduce((str,ele)=>str+"|"+ele.toUpperCase(),"")
console.log(result)

//    4. find() the course "react"
result=courses.find(ele=>ele==="react")
console.log(result)

//    5. findIndex() of "node"
result=courses.findIndex(ele=>ele==="node")
console.log(result)