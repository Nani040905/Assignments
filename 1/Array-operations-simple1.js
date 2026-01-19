// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];
let result
//    1. filter() temperatures above 35
result=temperatures.filter(ele=>ele>35)
console.log(result)

//    2. map() to convert all temperatures from Celsius → Fahrenheit
result=temperatures.map(ele=>((ele*9)/5)+32)
console.log(result)

//    3. reduce() to calculate average temperature
result=temperatures.reduce((sum,ele)=>sum+ele)/temperatures.length
console.log(result)

//    4. find() first temperature above 40
result=temperatures.find(ele=>ele>40)
console.log(result)

//    5. findIndex() of temperature 28
result=temperatures.findIndex(ele=>ele===28)
console.log(result)