{

    //type alias
 type Student = {
        name: string;
        age?: number;
        gender?: string;
        contactNo?: string;
        address?: string;
    }

    const student1 : Student ={
        name:'ss'
    }

    const student2 : Student ={
        name: 'puja',
        address:'777'
    }


    type Username = string;
    const username : Username = 'Shovan Sha';


    type Add = (num1:number,num2:number) => number ;
    const add: Add = (num1,num2) =>num1+num2
}