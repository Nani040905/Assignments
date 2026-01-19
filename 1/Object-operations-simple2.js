// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks
let totalMarks = 0;
for (let subject in marks) {
  totalMarks += marks[subject];
}
console.log("Total Marks:", totalMarks);

// 2. Calculate average marks
const numberOfSubjects = Object.keys(marks).length;
const averageMarks = totalMarks / numberOfSubjects;
console.log("Average Marks:", averageMarks);

// 3. Find the highest scoring subject
let highestSubject = "";
let highestMarks = 0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, "with marks:", highestMarks);

// 4. Add a new subject computer: 90
marks.computer = 90;
console.log("After adding computer subject:", marks);

