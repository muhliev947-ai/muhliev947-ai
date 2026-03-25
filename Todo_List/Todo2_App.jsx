import React from "react";
import { useState,useEffect } from "react";
import { Comp } from "./Todo2_comp";
import { List } from "../Todo2_list";

export const Todo=()=>{
const [inp,setInp] = useState('');
const [task,setTask] = useState([]);
const [change,setChange]= useState('');
const [edind,setInd] = useState(null);
const [filt,setFilt] = useState('all');
const [dark,setDark] = useState(false);

const FinalList=
    task.filter(el=>el.text.toLowerCase().includes(inp.toLowerCase()))
    .filter(el=>{
        if(filt == 'done') return el.done;
    if(filt === 'nodone') return !el.done;
        return true;
    })


useEffect(()=>{
    const saved =JSON.parse(localStorage.getItem("Todo-task"));
    if(saved){
  setTask(saved)
    }
},[])

useEffect(()=>{
    localStorage.setItem("Todo-task",JSON.stringify(task))
},[task])

const Add=()=>{
if(inp.trim()!==''){
    setTask([...task,{text:inp,done:false}])
    setInp('');
}
}

const Edit=(ind)=>{
    setInd(ind);
    setChange(task[ind].text)
}

const Save=()=>{
    const uptad = [...task]
    uptad[edind]={
        ...uptad[edind], text:change
    }
    setTask(uptad);
    setInd(null);
    setChange('');
}

const Ontoggle=(ind)=>{
    const uptad= [...task];
    uptad[ind].done = !uptad[ind].done;
    setTask(uptad);
}


const DeleteOne=(index)=>{
  setTask(task.filter((_,ind)=>ind!==index));
}

const Clear=()=>{
setTask([]);
}

return(
<div className={`${dark ? "bg-black text-white":"bg-white text-black"} min-h-screen transition-all duration-300`}> 
    <button onClick={()=>setDark(prev => !prev)}
    className={`${dark ? "bg-white text-black":"bg-black text-white"} p-3 border-2 rounded-lg`}    
    >{!dark ? "Light":"Dark"}</button>
        <h1 className="text-4xl text-center m-1.5">To-Do List</h1>
    <div className="flex m-2.5 justify-center gap-2.5">
    <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)} onKeyDown={(e)=>{
     if(e.key=="Enter"){
        Add();
     }
    }}
    className="w-[300px] h-[40px] text-black rounded-lg border border-gray-300 px-3 shadow-sm focus:ring-2 focus:ring-blue-400 bg-white transition focus:border-blue-400 placeholder:text-gray-400"
     placeholder="Write your task"
    />
    <button onClick={Add}
    className="px-4 py-2 font-medium hover:scale-105 active:scale-95 transition shadow-sm hover:shadow-md rounded-lg bg-blue-500 hover:bg-blue-600"
    >Add</button>
   </div>
<List
         FinalList={FinalList}
        setChange={setChange}
        change={change}
        edind={edind}
        Edit={Edit}
        Save={Save}
        DeleteOne={DeleteOne}
        ontoggle={Ontoggle}
/>
<div className="flex gap-3 justify-center mt-6 my-6 flex-wrap">
    <button className="px-4 py-2 font-medium hover:scale-105 active:95 rounded-lg transition shadow-sm hover:shadow-md  bg-green-600 hover:not-[bg-green-700]:" onClick={()=>setFilt('done')}>Done</button>
    <button className="px-4 py-2 font-medium hover:scale-105 active:scale-95 rounded-lg transition shadow-sm hover:shadow-md bg-red-600 hover:bg-red-700" onClick={()=>setFilt('nodone')}>Nodone</button>
    <button className="p-3 bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm hover:shadow-md font-medium px-4 py-2 transition hover:scale-105 acnive:scale-95 " onClick={()=>setFilt('all')}>All</button>

<button className="px-4 py-2 font-medium transition hover:scale-105 active:scale-95 shadow-sm hover:shadow md bg-white text-black rounded-lg mx-2" onClick={Clear}>Clear</button>
</div>
</div>  
);
}