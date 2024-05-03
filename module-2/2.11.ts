{
    // utility type;

    // pick
    type Person ={
        name: string;
        age:number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person,"name" | "age">

    // ommit
    type ContactInfo = Omit<Person,'name'|'age'>

    // require
    type RequireInfo = Required<Person>

    //partial 
    type PartialInfo = Partial<Person>;

    // readonly
    type PersonReadonly = Readonly<Person>
    const person1 : PersonReadonly ={
        name: "mr x",
        age: 200,
        contactNo:'355353'
    }

    // person1.name='55'

    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj= Record<string,string>
    const obj1 : MyObj ={
        a:'aa',
        b:'nn',
        c:'jj'
        
    }

    obj1.g = '77';
    console.log(obj1);


    const EmptyObj : Record<string,unknown> ={}


}