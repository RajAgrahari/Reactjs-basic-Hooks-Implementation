import React,{useState} from 'react';

const App=()=>{
    // const state = useState();
    const [count,setCount] = useState(0);
    const curTime = new Date().toLocaleTimeString();
    const [time,setTime]=useState(curTime);
    const [digitime,setDigi]=useState(curTime);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const Time=()=>{
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(function(){
       setDigi(new Date().toLocaleTimeString())
    },1000);

  return (
   <>
   <h1>{count}</h1>
   <button onClick={increment} >Increment</button>
   <button onClick={decrement}>Decrement</button>
   <h1>{time}</h1>
   <button onClick={Time}>Get Time</button>
   <h1>{digitime}</h1>
   </>
  )
};
export default App;
