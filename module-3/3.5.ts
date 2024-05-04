{
    // access modifier;
//   private not access outside class ,, protected access by inherited class;

    class BankAccount{
       readonly id:number;
        name:string;
       private _balance:number;
       protected age: number;
        constructor(id:number,name:string,balance:number,age:number){
            this.id =id;
            this.name = name;
            this._balance = balance;
            this.age = age;
        }
        addBalance(newBalance: number){
            this._balance += newBalance;
        }
        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.age = 10;
        }
    }

    const man1 = new BankAccount(10,'Shovan',12000,19)
    man1.addBalance(10000);
    console.log(man1.getBalance());
  
    
}