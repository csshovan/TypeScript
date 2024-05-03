{

    // nullable type
    const searchName = (value:string|null)=>{
        if(value)
            console.log('searching');
        else
        console.log('no seraching');
    }
    searchName(null);


    // unknown type
    const getSpeedInMeterPerSecond = (value:unknown) =>{
        if(typeof value==='number'){
            return (value*1000)/3600;
        }
        else if(typeof value === 'string'){
           return (parseFloat(value)*1000)/3600
        }
        else{
            return 'Wrong Input'
        }
    }
    console.log( getSpeedInMeterPerSecond(null));

    // never type
    const throwError = (msg:string):never =>{
        throw new Error(msg);
    }
    throwError('muskil se error')
   
}