{

    // function with generic;

    const createArray =(param: string):string[] =>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T):T[] =>{
        return [param]
    }

    type Obj = {
        id:number;
        name:string;
    }
    const res1 = createArrayWithGeneric<string>('bangladesh');
    const resGenerateObj = createArrayWithGeneric<Obj>({
        id:12,
        name:'Shovan Saha'
    })


    const createArrayWithTuple = <T,Q>(param1: T,param2: Q ):[T,Q] =>{
        return [param1,param2]
    }

    const res2 = createArrayWithTuple<string,number>('bangladesh',10);
    const resGenerateObj2 = createArrayWithTuple<Obj,string>({
        id:12,
        name:'Shovan Saha'
    },
    "bane"
 )

  

 const addCourseToStudent = <T>(student: T) =>{
    const course = 'Next Level Web Development';

    return {
        ...student,
        course
    }
 }

 const student1 = addCourseToStudent({
    name:'mr X',
    email:'x@gmail.com',
    devType:'next level'
 })
 const student2 = addCourseToStudent({
    name:'mr y',
    email:'x@gmail.com',
    devType:'next level',
    hasWatch:'apple'
 })

}
 