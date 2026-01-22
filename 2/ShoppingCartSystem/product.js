const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

function getProductById(id){
    return products.find(ele=>ele.id===id)
}

function getAllProducts(){
    return products
}

function getProductsByCategory(category) {
    return products.filter(ele=>ele.category===category)
}

function searchProducts(query){
    return products.filter(ele=>ele.name.toLowerCase().includes(query.toLowerCase()))
}

function checkStock(productId, quantity){
    let product=getProductById(productId)
    return product.stock>=quantity
}

function reduceStock(productId, quantity){
    let product=getProductById(productId)
    product.stock-=quantity
}

export {getAllProducts,getProductById,getProductsByCategory,searchProducts,checkStock,reduceStock}