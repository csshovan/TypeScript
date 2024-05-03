{

    //destructuring
    const user ={
        id:123,
        name:{
            firstName: 'Shovan',
            middleName: 'Saha',
            lastName: 'Hriday',
        },
        contactNo: '7748484',
        address: 'Uganda'
    }

    const {contactNo,name: {middleName:midName}} = user;  //name alice (:)

    //array destructuring
    const myFriends = ['saha','saga','buga','pujj','das']
    const [,,c,...d] = myFriends;
}