import logo from './logo.svg';
import React,{useState} from 'react';
import Message from './Message';
import './App.css';

function App(props) {
  let [count,setcount]=useState(0)
  let [isMorning,setMorning]=useState(false)
return(
    <div className={`box ${isMorning ? 'Day':''}`}>
        <h1>Day time= {isMorning ? "Morning":"Night"}</h1>
 <Message counter={count}></Message>

<button onClick={()=>setcount(++count)}>Update Counter</button>
<br/>
<button onClick={()=>setMorning(!isMorning)}>Update Day</button>
</div>
)
}

export default App;
