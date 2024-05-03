{
    // promise;
    type Todo ={
        id:number;
        userId: number;
        title: string;
        completed: boolean;
    }
    
    const getTodo = async():Promise<Todo>=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data
    }
    
    getTodo();
    
    
     
    // custom api
    const createPromise =():Promise<string> =>{
        return new Promise<string>((resolve,reject)=>{
            const data : string = 'something';
            if(data){
                resolve(data)
            }else{
                reject('fail to load data');
            }
        })
    }

    // calling promise function;
    const showDara = async()=>{
        const data = await createPromise();
        console.log(data);
    }

    showDara();
}