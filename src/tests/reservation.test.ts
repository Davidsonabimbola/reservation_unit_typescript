import { RoomReservation } from "../app/reservation"


 describe('Checking reservation',()=>{

 let sut: RoomReservation

 beforeEach(()=>{
     sut = new RoomReservation()
 })

 test('should reserve a room',()=>{

    sut.reserveRoom('101', 'Alice')
    expect(sut.getReservations()).toEqual([{roomId:'101',reservedBy: 'Alice'}])
 })


 test('should throw an error when a room has already been reserved',()=>{

    sut.reserveRoom('101', 'Alice')
    expect(() => sut.reserveRoom('101', 'Alice')).toThrow('Room 101 is already reserved');

 })


 test('should successfully cancel a reservation',()=>{
     sut.cancelReservation('101')
    expect(sut.getReservations).not.toContain('101')
    expect(sut.getReservations()).toEqual([])

 })



 })