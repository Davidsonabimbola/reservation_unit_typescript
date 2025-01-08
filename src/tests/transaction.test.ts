import { Transaction, TransactionManager } from "../app/transaction"

describe.only('TransactionManager',()=>{
    let sut: TransactionManager;

    beforeEach(()=>{
        sut = new TransactionManager()
        
    })


    test('should add a transaction',()=>{


        const payment_1 : Transaction= {
            id: 'P_001',
            type: 'deposit',
            amount: 2500,
            transactionDate: '2025/01/25'
            //date: new Date()
        }
        sut.addTransaction(payment_1)
        const actual =sut.getTransactions()
        expect(actual).toEqual([payment_1 ] )

    })




})