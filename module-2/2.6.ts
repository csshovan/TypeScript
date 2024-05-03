{

    // constraints
    const addCourseToStudent = <T extends {id:number; name:string;email:string}>(student: T) =>{
        const course = 'Next Level Web Development';
    
        return {
            ...student,
            course
        }
     }
    
     const student1 = addCourseToStudent({
        id:11,
        name:'mr X',
        email:'x@gmail.com',
        devType:'next level'
     })
     const student2 = addCourseToStudent({
        id:12,
        name:'mr y',
        email:'x@gmail.com',
        devType:'next level',
        hasWatch:'apple'
     })
     const student3 = addCourseToStudent({
       name:'emni',
       id:122,
       email:''
     })
}