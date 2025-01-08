

import { Calculator } from "../app/calculator"

describe ('test spy on the calculator class',()=>{
let sut: Calculator


test('use spy on the add method',()=>{
    //sut = new Calculator()
    sut = new Calculator()
    
    const addspy = jest.spyOn(sut, 'add')
    const result = sut.add(2,5)
    expect(addspy).toHaveBeenCalled()
    expect(addspy).toHaveBeenCalledWith(2,5)
    expect(result).toBe(7)

})

})