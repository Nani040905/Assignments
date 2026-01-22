import { courses } from "./data.js";

//Get published courses
function getPublishedCourses(){
    return courses.filter(ele=>ele.published)
}

// Sort courses by price (high → low)
function sortCoursesByPrice(){
    return courses.sort((a, b) => {
  if (a.price < b.price) {
    return 1; // A positive value moves 'b' before 'a'.
  } else if (a.price > b.price) {
    return -1; // A negative value moves 'a' before 'b'.
  } else {
    return 0; // Zero keeps the original order between 'a' and 'b'.
  }
});
}

//Extract { title, price } only
function getTitleAndPrice(){
    return courses.map(({ title, price }) => ({ title, price }));
}

//Calculate total value of published courses
function getPublishedTotalValue (){
    return getPublishedCourses().reduce((acc,ele)=>acc+ele.price,0)
}

//Add a new course immutably
function addCourse(newCourse){
    return [...courses,newCourse]
}

export {getPublishedCourses,sortCoursesByPrice,getTitleAndPrice,getPublishedTotalValue,addCourse}
