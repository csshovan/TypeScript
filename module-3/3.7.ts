{
    // static ;;
    class Counter{
        static count:number = 0;
        increment(){
            return(Counter.count+=1);
        }
        decrement(){
            return(Counter.count-=1);
        }
    }

    const ins1 = new Counter();
    console.log(ins1.increment());
    const ins2 = new Counter();
    console.log(ins2.increment());
}