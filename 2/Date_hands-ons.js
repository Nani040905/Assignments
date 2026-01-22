// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

let currentDate=new Date();


let year=currentDate.getFullYear();
let month=currentDate.getMonth()+1;
let date=currentDate.getDate();
let dayOfWeek=currentDate.getDay();
let hours=currentDate.getHours();
let minutes=currentDate.getMinutes();
let seconds=currentDate.getSeconds();

console.log("year:",year);
console.log("month:",month);
console.log("date:",date);
console.log("dayOfWeek:",dayOfWeek);
console.log("hours:",hours);
console.log("minutes:",minutes);
console.log("seconds:",seconds);

let formattedDate=date+'-'+month+'-'+year+' '+hours+':'+minutes+':'+seconds;
console.log(formattedDate);












// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid


let enrollmentDeadline = new Date("2026-01-20");

let today=new Date();
if(today<enrollmentDeadline){
    console.log("Enrollment Open");
}
else{
    console.log("Enrollment Closed");

}

let inputDate=new Date("2026-02-30");
if(!isNaN(inputDate)){
    console.log("Valid Date");
}
else{
    console.log("Invalid Date");
}









// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years


let dob = "2000-05-15";

let dateOfBirth=new Date(dob);

let presentDate=new Date();

let timeDifference=presentDate.getFullYear()-dateOfBirth.getFullYear();
console.log(timeDifference);