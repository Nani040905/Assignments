import { getProductById } from "./product.js";

const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

function validateCoupon(couponCode, cartTotal, cartItems) {
    let coupon=coupons[couponCode];
    if (coupon){
        if (coupon.minAmount<=cartTotal){
            let flag=false
            if (coupon.category){
                for (let item of cartItems){
                    // Check if at least one item in the cart matches the coupon's category
                    if (getProductById(item.productId).category === coupon.category) {
                        flag = true;
                        break; // Found an item in the category, so the category condition is met
                    }
                }
                if (!flag){
                    return {valid:false,message:'Coupon is invalid'}
                }
            }
            return {valid:true,message:'Coupon is valid'}
        }
        else{
            return {valid:false,message:'Coupon is invalid'}
        }
    }
    else{
        return {valid:false,message:'Coupon is invalid'}
    }
}

function calculateDiscount(couponCode, cartTotal) {
    let coupon=coupons[couponCode]
    if (coupon.type==='percentage'){
        return cartTotal*coupon.value/100
    }
    else{
        return coupon.value
    }
}

function applyDiscount(cartTotal, couponCode, cartItems) {
    let result=validateCoupon(couponCode,cartTotal,cartItems)
    if (result.valid){
        return {
            originalTotal:cartTotal,
            discount:calculateDiscount(couponCode,cartTotal),
            finalTotal:cartTotal-calculateDiscount(couponCode,cartTotal),
            message:result.message,
            valid:true
        }
    }

}

export { validateCoupon, calculateDiscount, applyDiscount }