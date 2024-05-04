{
    // getter and setter
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
        //  addBalance(newBalance: number){
        //      this._balance += newBalance;
        //  }
        //  getBalance(){
        //      return this._balance;
        //  }

        // getter 
        get Balance(){
            return this._balance;
        }

        // setter 
        set deposite(value:number){
            this._balance+=value;
        }

     }
 
     class StudentAccount extends BankAccount{
         test(){
             this.age = 10;
         }
     }
 
     const man1 = new BankAccount(10,'Shovan',100,19)
    man1.deposite = 1000;
     console.log(man1.Balance);
   
     
 }
