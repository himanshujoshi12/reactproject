
import { useState } from 'react';
import './App.css';

function App() {
  const[task,setTask] =useState('');
  const [input,setInput]=useState([]);
  function Submit(){
    setInput([...input,task]);
  }
  return (
    <div className="App">
      <h1>To-Do Application</h1>
      <input type='text' placeholder='enter task!!' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={Submit}>Add</button>
      {
        input && input.map(item=>{
          return(
            <div>{item}</div>
          )
        })
      }
    </div>
  );
}

export default App;
