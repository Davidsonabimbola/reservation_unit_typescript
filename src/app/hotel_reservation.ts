export interface Room {
    roomId: string;
    type: 'single' | 'double';
    price: number;
  }
  
  export interface Reservation {
    roomId: string;
    reservedBy: string;
    checkIn: Date;
    checkOut: Date;
  }
  
  export class HotelReservation {
    private rooms: Room[] = [];
    private reservations: Reservation[] = [];
  
    addRoom(room: Room): void {
      this.rooms.push(room);
    }
  
    reserveRoom(roomId: string, reservedBy: string, checkIn: Date, checkOut: Date): void {
      if (!this.rooms.find(room => room.roomId === roomId)) {
        throw new Error(`Room ${roomId} does not exist`);
      }
  
      const conflict = this.reservations.some(res => {
        return res.roomId === roomId &&
          ((checkIn >= res.checkIn && checkIn < res.checkOut) ||
           (checkOut > res.checkIn && checkOut <= res.checkOut));
      });
  
      if (conflict) {
        throw new Error(`Room ${roomId} is not available for the selected dates`);
      }
  
      this.reservations.push({ roomId, reservedBy, checkIn, checkOut });
    }
  
    getAvailableRooms(checkIn: Date, checkOut: Date): Room[] {
      return this.rooms.filter(room => {
        return !this.reservations.some(res => {
          return res.roomId === room.roomId &&
            ((checkIn >= res.checkIn && checkIn < res.checkOut) ||
             (checkOut > res.checkIn && checkOut <= res.checkOut));
        });
      });
    }
    // Clears all rooms
//   clearRooms(): void {
//     this.rooms = [];
//   }

//   // Clears all reservations
//   clearReservations(): void {
//     this.reservations = [];
//   }

    
  }