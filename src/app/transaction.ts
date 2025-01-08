export interface Transaction {
    id: string;
    type: 'deposit' | 'withdrawal';
    amount: number;
    transactionDate : string
    
  }
  
  export class TransactionManager {
    private transactions: Transaction[] = [];
  
    addTransaction(transaction: Transaction): void {
      if (transaction.amount <= 0) {
        throw new Error("Transaction amount must be greater than zero");
      }
      this.transactions.push(transaction);
    }
  
    getTransactions(): Transaction[] {
      return this.transactions;
    }
  
    filterTransactionsByType(type: 'deposit' | 'withdrawal'): Transaction[] {
      return this.transactions.filter(tx => tx.type === type);
    }
  }