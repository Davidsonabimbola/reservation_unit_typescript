import { Product, ProductManager } from "../app/ecommerce"

describe('ecommerce functionality',()=>{

let sut: ProductManager
    beforeEach(()=>{

    sut = new ProductManager()

    })



test('should successfully add a product', () => {

    const item:Product = {

        id: 'AX001',
        name: 'perfume',
        price: 380
    }

    sut.addProduct(item)
    expect(sut.getProducts()).toEqual([{id:'AX001',name:'perfume',price:380}])

})



test('should retrieve a product by id', () => {

    const item:Product = {

        id: 'AX008',
        name: 'bag',
        price: 500
    }

    sut.addProduct(item)
    

    const actual = sut.findProductById('AX008')
    expect(actual).toEqual(item)

})



})