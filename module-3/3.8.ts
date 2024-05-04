{
    // polymorphism
    class Person{
      getSleep(){
        console.log(`I am sleeping for 6 hours`);
      }
    }
    class Student extends Person{
        getSleep(){
            console.log(`i am sleeping 5 hours`);
        }  
    }
    class Developer extends Person{
        getSleep(){
            console.log(`i am sleeping 4 hours`);
        }  
    }

    const getSleepingHours = (param:Person)=>{
        param.getSleep()
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);



    class Shape{
        getArea(): number{
            return 0;
        }
    }

    class Circle extends Shape{
      
        constructor(public radius:number){super()}

        getArea(): number {
            return Math.PI*this.radius*this.radius
        }
    }
    class Rectangle extends Shape{
      
        constructor(public hight:number,public width:number){super()}

        getArea(): number {
            return Math.PI*this.hight*this.width
        }
    }

    const getShapeARea = (param: Shape) =>{
        console.log(param.getArea());
    }

    const shap1 = new Shape();
    const shap2 = new Circle(10);
    const shap3 = new Rectangle(10,20);

    getShapeARea(shap1);
    getShapeARea(shap2);
    getShapeARea(shap3);


}