import { cart,courses } from "./data.js";

//Merge cart with courses to get full course info
function getCart(){
    return cart.map(item => {
        const course = courses.find(c => c.id === item.courseId);
        return {
            ...course,
            qty: item.qty
        };
    });
}

//Calculate total cart amount
function getCartTotal(){
    return getCart().reduce((acc,ele)=>acc+ele.price*ele.qty,0)
}

//Increase quantity of a course (immutably)
function increaseQty(courseId){
    return cart.map(ele=>{
        if (ele.courseId===courseId){
            ele.qty++
        }
        return ele
    })
}

//Remove a course from cart
function removeCourse(courseId){
    return cart.filter(ele=>ele.courseId!==courseId)
}

//Check if all cart items are paid courses
function isAllPaidCourses(){
    return cart.every(item => {
        const course = courses.find(c => c.id === item.courseId);
        return course.price > 0;
    })
}

export {getCart,getCartTotal,increaseQty,removeCourse,isAllPaidCourses}