{

    // function

    // normal function

    function addSum(num1:number,num2:number=10):number {
        return num1+num2;
    }
    addSum(45)

    // arrow function

    const addArrow = (num1:number,num2:number) : number => num1+num2


    //object --> method;

    const poorUser = {
        name:"Shovan",
        balance: 0,
        addBalance(balance:number):string{
         return `my new balane : ${this.balance+balance}`
        }
    }


    const arr : number[]= [1,4,10];
    const newArray:number[] = arr.map((element:number): number=>element*element)
}