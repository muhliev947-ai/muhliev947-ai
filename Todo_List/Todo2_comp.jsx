import React from "react";

export const Comp=({setChange,change,edind,Edit,Save,DeleteOne,el,ind,ontoggle})=>{


    return(
                    <li className={`"flex justify-between items-center bg-gray-100 rounded-lg p-3 shadow-sm hover:bg-gray-200 transition text-black my-3
                     ${el.done ? "opacity-60 line-through":""}`}>
{el.text}
{edind==ind &&(
    <input type="text" value={change} onChange={(e)=>setChange(e.target.value)} />
)}

<button className="px-2 py-1 text-sm rounded-md" onClick={()=>Edit(ind)}>Edit</button>
<button className="px-2 py-1 text-sm rounded-md" onClick={Save}>Save</button>
<button className="px-2 py-1 text-sm rounded-md" onClick={()=>DeleteOne(ind)}>DeleteOne</button>

<button
onClick={()=>ontoggle(ind)}
>
    {el.done ? 'No done':'Done'}
</button>
                    </li>
    )
}