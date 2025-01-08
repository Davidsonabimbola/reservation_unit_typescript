import { Cart, Product } from "../app/cartManagement"

describe('testing cart management',()=>{

let sut:Cart

beforeEach(()=>{
    sut = new Cart()
})

test('should successfully add to cart',()=>{

    const product:Product = {

        id: '001',
        name: 'perfume',
        price: 380
    }

    sut.addToCart(product,2)
    const actual = sut.getCartItems()
    //expect(actual).toEqual([{'product':{id:'001',name:'perfume',price:380} ,quantity:2}])
    expect(actual).toEqual([{product ,quantity:2}])  
})


test('should successfully remove from cart',()=>{

    const product:Product = {

        id: '001',
        name: 'perfume',
        price: 380
    }

    sut.addToCart(product,2)
    sut.removeFromCart('001')
     expect(sut.getCartItems()).toEqual([])
    
})


test('should successfully calculate the total price of items in the cart',()=>{

    const product:Product = {

        id: '001',
        name: 'perfume',
        price: 380
    }

    sut.addToCart(product,2)
    const total = sut.calculateTotal()
    expect(total).toBe(760)
    
    
})


})