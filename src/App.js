import React from "react";
import { useState } from "react";

const App = ()=>{
const [inputVal,setinputVal]=useState("");
const[Items,setItems]=useState([]);
const addItem=()=>{
  if(!inputVal){}else{

    setItems([...Items,inputVal]);
    setinputVal("");
  }
}

const deleteItem=(id)=>{
console.log(id);
const updatedItems =Items.filter((element,index)=>{
return index!==id;
});
setItems(updatedItems);
}
const removeAll=()=>{
setItems([]);
}


  return(
    <>
    <h1 className="h1">Todo App</h1>
    <div className="main">

    <div className="container">
      <input className="input" placeholder="Add todo" value={inputVal} onChange={(e)=>setinputVal(e.target.value)} type="text"/>
      <button className="btn" onClick={addItem}>Submit</button>
      <button className="btn" onClick={removeAll}>DeleteAll</button>
    </div>
    <div className="container">
      <ol>
      {
        Items.map((element,index)=>{
          return (
            <>
<li className="li" key={index}>{element} <button className="btn" onClick={()=>deleteItem(index)}>Delete</button></li></>
          )
        })
      }
      </ol>
      
    </div>
      </div>
    </>
  )
}
export default App