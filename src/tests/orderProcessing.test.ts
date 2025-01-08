import { Order, OrderManager, Product } from "../app/orderProcessing"

describe.only('order processing',()=>{
    let sut: OrderManager


    beforeEach(()=>{
        sut = new OrderManager()
        
    })

    test('should successfully place an order',()=>{
        const product:Product = {

            id: 'pr001',
            name: 'iphone 16',
            price: 1000
        }

        const order:Order = {
            id: 'ts_001',
            items : [{product, quantity :2}],

            total: 2,
            status: 'pending' 
        }

        sut.placeOrder(order)
        expect(sut.getOrderById('ts_001')).toBe(order)
    })



    test('should successfully change order status',()=>{

       const product:Product = {

            id: 'pr001',
            name: 'iphone 16',
            price: 1000
        }

        const order:Order = {
            id: 'ts_001',
            items : [{product, quantity :2}],

            total: 2,
            status: 'pending' 
        }


        const correctedOrder = {
            id: 'ts_001',
            items : [{product, quantity :2}],

            total: 2,
            status: 'completed' 

        }

        sut.placeOrder(order)
        sut.updateOrderStatus('ts_001','completed')
        expect(sut.getOrderById('ts_001')).toEqual(correctedOrder)
        
    })


    test('should throw an error',()=>{
        const product:Product = {

            id: 'pr001',
            name: 'iphone 16',
            price: 1000
        }

        const order:Order = {
            id: 'ts_001',
            items : [{product, quantity :2}],

            total: 2,
            status: 'pending' 
        }
           sut.placeOrder(order)
           expect(() => sut.updateOrderStatus('ts_002', 'completed')).toThrow('Order with id ts_002 not found');
        

    })


})