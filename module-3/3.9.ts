{
    // abstraction ;;
    // interface
    // idea
    interface Vehicle1 {
        // name:string;
        // model:string;
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

//     const vehicle1: Vehicle1 = {
//         name:"TOYOTA",
//         model:'345'
//     }
   
// real implementation
  class Car1 implements Vehicle1{
     startEngine(): void {
         console.log('engine start');
     }
     stopEngine(): void {
         console.log('engine stop');
     }
     move(): void {
         console.log('move');
     }
     test(){
        console.log('test');
     }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();



//   abstact class 
// idea only
 abstract class Car2{
   abstract startEngine(): void 
   abstract stopEngine(): void 
  abstract  move(): void 
    test(){
       console.log('test');
    }
}

// implementation
class Tesla extends Car2{
    startEngine(): void {
        console.log('start');
    }
    stopEngine(): void {
       console.log('stop'); 
    }
    move(): void {
        console.log('move');
    }
}

const hondaCar = new Tesla();
hondaCar.startEngine();

}