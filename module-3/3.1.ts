{

    // oop -class
    class Animal{
       private name: string;
        species: string;
        sound:string;

        constructor(name: string,species: string,sound: string){
            this.name = name;
            this.species = species;
            this.sound= sound;
        }

        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('german','kukur','ghew ghew');
    dog.makeSound()
}