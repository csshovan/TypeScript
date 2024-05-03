{

    //spread operator
    const bros1 : string[] = ['Shovan',"saha",'abir'];
    const bros2 : string[] = ["tanmoy","nahid","rahat"];
    bros1.push(...bros2)

    const mentors1 = {
        typescript: 'Ami',
        redux: 'mir',
        dbms: 'mix'
    }

    const mentors2 = {
        typescript: 'Ami',
        redux: 'mir',
        dbms: 'mix'
    }

    const mentorList ={
        ...mentors1,
        ...mentors2
    }


    // rest operator

    const greetFriends = (...friends:string[]) =>{
       friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
    }

    greetFriends('shovan','saha','op');
}