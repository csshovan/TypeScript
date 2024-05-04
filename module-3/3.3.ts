{
    // type guards
    // typeof operator --> runtime
type Alphanumeric = string|number

    const add = (param1:Alphanumeric,param2:Alphanumeric):Alphanumeric=>{

        if(typeof param1 === 'number' && typeof param2 === 'number')
              return param1+param2
            else{
                return param1.toString+ param2.toString();
            }
    }

    const result1 = add(2,"3");


      // in guard;
    type NormalUser = {
   name:string;
    }

    type AdminUser ={
        name: string;
        role:"admin";
    }

    const getUser = (user: NormalUser|AdminUser )=>{
       if('role' in user){
        console.log(`My name is ${user.name} & ${user.role}`);
       }
    }

    const normalUser : NormalUser ={
        name:'Mr. Normal'
    }
    const adminUser : AdminUser={
        name:'Mr admin',
        role:'admin'
    }
    
    getUser(adminUser);

}