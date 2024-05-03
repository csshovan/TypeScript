{

    // type interface same as type alias;
    

    type User1 ={
        name:string;
        age:number;
    }

    type UserWithRoll1 = User1 & {roll:number};

    const user1:UserWithRoll1 ={
        name:"Shovan",
        age:100,
        roll:33
    }
    
    interface User2 {
        name:string;
        age:number;
    }
    
    interface UserWithRoll2  extends User2 {
        roll:number
    }

    const user2:UserWithRoll2 ={
        name:"Shovan",
        age:100,
        roll:33
    }


 type Roll1 = number[];
 const rollNum1 : Roll1 = [1,2,3];
 
 interface Roll2 {
    [index:number] : number
 }
 const rollNum2 : Roll2 =[1,2,3];


 type Add1 = (num1:number,num2:number)=>number;
 const add1:Add1=(num1,num2)=>num1+num2;

 interface Add2 {
    (num1:number,num2:number) : number
 }
 const add2:Add2=(num1,num2)=>num1+num2;
}