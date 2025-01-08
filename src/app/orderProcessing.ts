export interface Product {
    id: string;
    name: string;
    price: number;
  }



export interface Order {
    id: string;
    items: { product: Product; quantity: number }[];
    total: number;
    status: 'pending' | 'completed' | 'canceled';
  }
  
  export class OrderManager {
    private orders: Order[] = [];
  
    placeOrder(order: Order): void {
      this.orders.push(order);
    }
  
    getOrderById(id: string): Order | undefined {
      return this.orders.find(order => order.id === id);
    }
  
    updateOrderStatus(id: string, status: 'pending' | 'completed' | 'canceled'): void {
      const order = this.getOrderById(id);
      if (!order) throw new Error(`Order with id ${id} not found`);
      order.status = status;
    }
  }
  