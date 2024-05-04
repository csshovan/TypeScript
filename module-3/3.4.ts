{

    // instanceof guard:
    class Animal{
      name:string;
      species: string;
      constructor(name: string,species:string){
        this.name = name;
        this.species=species;
      }  

      makeSound(){
        console.log("making sound");
      }
    }

    
      class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeBark(){
            console.log("Dog barking");
        }
      }

      class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeMaw(){
            console.log("Cat meaw");
        }
      }

    //   smart way handle -->
    const isDog = (animal: Animal): animal is Dog=>{
        return animal instanceof Dog
    }
    const isCat = (animal: Animal):animal is Cat=>{
        return animal instanceof Cat
    }

    const getAnimal = (animal : Animal) =>{
        if(isDog(animal)){
           animal.makeBark();
        }
        else if(isCat(animal)){
           animal.makeMaw();
        }
     }


    //   const getAnimal = (animal : Animal) =>{
    //      if(animal instanceof Dog){
    //         animal.makeBark();
    //      }
    //      else if(animal instanceof Cat){
    //         animal.makeMaw();
    //      }
    //   }

      const dog = new Dog('Dog','Dog1');
      const cat = new Cat('Cat','cat1');

      
    
}