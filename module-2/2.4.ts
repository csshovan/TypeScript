{

    // interface - generic;

    interface Developer<T,X=null>{
        name: string;
        computer:{
            brand:string;
            model:string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: X;
    }

    const poorDeveloper :Developer<{
        brand:string;
        model:string;
        display:string
    }> ={
        name:'aho',
        computer:{
            brand:'hp',
            model:'rrr',
            releaseYear: 5622
        },
        smartWatch: {brand: 'emilab',
            model:'kwgg',
            display: 'OLED'
        }
    }


    interface AppleWatch {
        brand:string;
        model:string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    
    type YahamahaBike = {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper :Developer<AppleWatch,YahamahaBike> ={
        name:'shovan',
        computer:{
            brand:'hp best',
            model:'rrr',
            releaseYear: 2024
        },
        smartWatch: {brand: 'Apple',
            model:'something',
            heartTrack: true,
            sleepTrack:true
        },
        bike:{
            model:'Yahama',
            engineCapacity: '100c'
        }
    }
}