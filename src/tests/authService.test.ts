import { AuthService } from "../app/authService"

describe('test auth service',()=>{

    afterEach(()=>{
        jest.resetAllMocks(); 
    })

    let sut : AuthService


    test('spyon and mock auth service',()=>{
        sut = new AuthService()

        const isAuthenticatedSpy = jest.spyOn(sut, 'isAuthenticated').mockImplementation(()=>false)
        const result = sut.isAuthenticated()
        expect(result).toBe(false)
        expect(isAuthenticatedSpy).toHaveBeenCalled()


    })







})