{

    //  ternary operator
    const age:number = 15;
    const isAdult = age>18 ? 'adult' : 'not adult';
    console.log(isAdult);

    // nullish coalescing operator
    // null ba undefined  --> decision making;
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    console.log(result1,result2);


    // optional chaining
    type User ={
        name:string;
        address:{
            city: string;
            road: string;
            presentAdd:string;
            permanentAdd?:string
        }
    }

    const user:User ={
        name:"sh",
        address:{
            city:"dg",
            road:'hh',
            presentAdd:'hhh'
        }
    }

    const permanentAdd = user?.address?.permanentAdd ?? 'No address';
    console.log({permanentAdd});

}