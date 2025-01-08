export interface Product {
    id: string;
    name: string;
    price: number;
  }
  
  export class Cart {
    private items: { product: Product; quantity: number }[] = [];
  
    addToCart(product: Product, quantity: number = 1): void {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }
    }
  
    removeFromCart(productId: string): void {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    calculateTotal(): number {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  
    getCartItems() {
      return this.items;
    }
  }