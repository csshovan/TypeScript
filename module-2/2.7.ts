{
    // generic constraint key of operaor;
    type Vehicle ={
        bike:string;
        car:string;
        ship:string;
    }

    type Owner = "bike" | "car" | 'ship' //manually;

    type Owner2 =keyof Vehicle;

    const person1 : Owner = "bike";
    const person2 :Owner2 ="ship";


    const user = {
        name: 'Shovan Saha',
        age:34,
        address:"Dhaka"
    }
    // user['']

    const getPropertyValue = <T,Q extends keyof T> (obj:T,key:Q) =>{
      return obj[key]
    }

    const result1 = getPropertyValue(user,'name')
}