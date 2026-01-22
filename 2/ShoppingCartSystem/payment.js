import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

function processPayment(paymentMethod, couponCode = null) {
    let cartItems=getCartItems()
    let cartTotal=getCartTotal()
    if (validatePaymentMethod(paymentMethod)){
        let order={
            orderId:generateOrderId(),
            items:cartItems,
            subtotal:cartTotal,
            discount:0,
            total:cartTotal,
            paymentMethod:paymentMethod,
            status:'success',
            message:'Payment successful'
        }
        if (couponCode){
            let result=applyDiscount(cartTotal,couponCode,cartItems)
            if (result.valid){
                order.discount=result.discount
                order.total=result.finalTotal
            }
            else{
                order.status='failed'
                order.message=result.message
            }
        }
        if (order.status==='success'){
            for (let item of cartItems){
                reduceStock(item.productId,item.quantity)
            }
            clearCart()
        }
        return order
    }
}

function validatePaymentMethod(method) {
    if (method==='card' || method==='upi' || method==='cod'){
        return true
    }
    return false
}

function generateOrderId() {
    return 'ORD' + Date.now();
}

export { processPayment, validatePaymentMethod, generateOrderId }