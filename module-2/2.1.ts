{

    // type assertion
    let anything: any;
    anything = 'nest';
    anything = 222;
    // (anything as number)


    const kgToGm = (value: string|number): string|number|undefined =>{
        if(typeof value === 'string'){
            return `The convert val : ${parseFloat(value)*1000}`;
        }
        else{
            return value*1000;
        }
    }
    const result1 = kgToGm(100) as number;
    const result2 = kgToGm("1000") as string;


    type CusmotError = {
        message:string;
    }
    try{

    }catch(err){
       console.log((err as CusmotError).message );
    }
 
}