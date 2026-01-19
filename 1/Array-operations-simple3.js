// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const marks = [78, 92, 35, 88, 40, 67];
let result

//     1. filter() marks ≥ 40 (pass marks)
result=marks.filter(ele=>ele>=40)
console.log(result)

//     2. map() to add 5 grace marks to each student
result=marks.map(ele=>ele+5)
console.log(result)

//     3. reduce() to find highest mark
result=marks.reduce((max,ele)=>ele>max?ele:max)
console.log(result)

//     4. find() first mark below 40
result=marks.find(ele=>ele<40)
console.log(result)

//     5. findIndex() of mark 92
result=marks.findIndex(ele=>ele===92)
console.log(result) 