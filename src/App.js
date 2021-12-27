import React, { useState } from 'react'
//import './App.css';

const App= ()=> {
  const state=useState();
  const[count,setCount]=useState(0);

 const IncNum=()=>{
   setCount(count +1);
}
  return (
    <>
    <h1>{count }</h1>
    <button onClick={IncNum}> click me</button>
    <h2>you clicked me <span> { count}</span> times
     </h2>
    </>
    
  );
}

export default App;
