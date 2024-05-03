{

    //union types |
    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    type FullStackDeveloper = FrontendDeveloper | 'expertDevelop';
    type Developer = FrontendDeveloper | FullStackDeveloper;
    const newDeveloper : Developer = 'juniorDeveloper';
    



    type User = {
        name: string;
        email?: string;
        gender: "male"|"female";  
    }

    const user1: User ={
        name:'Shovan',
        gender:"male"
    }


    // intersection type
    type FrontendDev = {
        skills: string[];
        designation1: 'Fronted Developer'
    }
    type BackendDev = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDev = FrontendDev & BackendDev;

    const fullstackDeveloper : FullStackDev ={
        skills:['html','css'],
        designation1:'Fronted Developer',
        designation2:'Backend Developer'
    }
}