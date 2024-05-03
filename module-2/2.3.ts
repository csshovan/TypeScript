{

    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] =[1,2,3];
    const rollNumbers: GenericArray<number> =[1,2,3];


    // const mentors: string[]= ['mr x','mr y','mr z'];
    // const mentors: Array<string> = ['mr x','mr y','mr z'];
    const mentors: GenericArray<string> = ['mr x','mr y','mr z'];


    // const boolArray: boolean[] = [true,false,true];
    // const boolArray: Array<boolean> =  [true,false,true];
    const boolArray: GenericArray<boolean> =  [true,false,true];



    const user : GenericArray<{name:string,age:number}> = [
        {
            name: 'shovan',
            age:12
        },
        {
            name:'Saha',
            age:110
        }
    ]


    // generic tuple

   type GenericTuple<X,Y>= [X, Y]
    const manus : GenericTuple<string,string> = ['X','Y'];
    const userWithId : GenericTuple<number,{name:string,email:string}> =[123 , {name:'Shovan',email:'@gmail.com'}]
}