 import { HotelReservation, Reservation, Room } from "../app/hotel_reservation"

describe('hotel reservation', () => {
    let sut: HotelReservation;
  
    beforeEach(() => {
      
      const roomKazan: Room = {
        roomId: 'Kazan',
        type: 'double',
        price: 400,
      };


      const roomAdded: Room = {
        roomId: '105',
        type: 'single',
        price: 350,
      };

      
  
      sut = new HotelReservation();
      sut.addRoom(roomAdded);
      
      
    });
  
    test('should successfully reserve a room', () => {

        
      const checkIn = new Date('2025-01-19');
      const checkOut = new Date('2025-01-25');
  
      const reservation: Reservation = {
        roomId: '105',
        reservedBy: 'Samuel',
        checkIn: checkIn,
        checkOut: checkOut,
      };
  
      expect(() => sut.reserveRoom(reservation.roomId, reservation.reservedBy, reservation.checkIn, reservation.checkOut)).not.toThrow();
  
      expect(sut.getAvailableRooms(reservation.checkIn, reservation.checkOut)).toEqual([]);
    });
  });
  