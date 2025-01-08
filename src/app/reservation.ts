type Reservation = { 
    roomId: string; 
    reservedBy: string };

export class RoomReservation {
  private reservations: Reservation[] = [];

  reserveRoom(roomId: string, reservedBy: string): void {
    if (this.reservations.find(res => res.roomId === roomId)) {
      throw new Error(`Room ${roomId} is already reserved`);
    }
    this.reservations.push({ roomId, reservedBy });
  }



  cancelReservation(roomId: string): void {
    this.reservations = this.reservations.filter(res => res.roomId !== roomId);
  }


  
  getReservations(): Reservation[] {
    return this.reservations;
  }
}