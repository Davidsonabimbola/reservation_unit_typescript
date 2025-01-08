export interface Product {
    id: string;
    name: string;
    price: number;
  }
  
  export class ProductManager {
    private products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    getProducts(): Product[] {
      return this.products;
    }
  
    findProductById(id: string): Product | undefined {
      return this.products.find(product => product.id === id);
    }
  }