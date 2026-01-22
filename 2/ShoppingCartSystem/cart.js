import { getProductById,checkStock } from "./product.js";

let cartItems=[]

function addToCart(productId, quantity){
    let product=getProductById(productId)
    if (checkStock(productId,quantity)){
        let cartItem=cartItems.find(ele=>ele.productId===productId)
        if (cartItem){
            cartItem.quantity+=quantity
            return "Item updated"
        }
        else{
            cartItems.push({productId,quantity})
            return "Item added"
        }
    }

}

function removeFromCart(productId) {
    let index=cartItems.findIndex(ele=>ele.productId===productId)
    if (index>=0){
        cartItems.splice(index,1)
        return "Item removed"
    }
    else{
        return "Item not found"
    }
}

function updateQuantity(productId, newQuantity) {
    let cartItem=cartItems.find(ele=>ele.productId===productId)
    if (getProductById(productId).stock>=newQuantity && cartItem){
        cartItem.quantity=newQuantity
        return "Item updated"
    }
    else{
        return "Item not updated"
    }
}

function getCartItems() {
    return cartItems.map(ele=>({
        productId:ele.productId,
        name:getProductById(ele.productId).name,
        price:getProductById(ele.productId).price,
        quantity:ele.quantity
    }))
}

function getCartTotal() {
    let total=0
    for (let item of cartItems){
        total+=getProductById(item.productId).price*item.quantity
    }
    return total
}

function clearCart() {
    cartItems=[]
}

export {addToCart,removeFromCart,updateQuantity,getCartItems,getCartTotal,clearCart}