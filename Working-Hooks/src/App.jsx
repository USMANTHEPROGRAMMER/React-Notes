import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  
  const [tasks, setTasks] = useState([])

  
  let data = JSON.parse(localStorage.getItem("Tasks"))
  console.log(data)
  
  let btnFunction = () => {
    
    console.log(title)
    console.log(detail)
    
    let copyTasks = [...tasks]
    
    copyTasks.push({title, detail})
    
    setTasks(copyTasks)
    
    localStorage.setItem("Tasks", JSON.stringify(copyTasks))
  }



  return (
    <div>
      <input type="text" placeholder="Enter Title...." value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder="Enter Description...." value={detail} onChange={(e) => setDetail(e.target.value)}/>
      <button onClick={btnFunction}>Submit Please</button>
    </div>
  );
};

export default App;
