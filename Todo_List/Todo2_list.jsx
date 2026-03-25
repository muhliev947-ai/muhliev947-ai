import React from "react";
import { Comp } from "./Todo_List/Todo2_comp";

export const List=({
setChange,
change,
edind,
Edit,
Save,
DeleteOne,
ontoggle,
FinalList
})=>{

    return(
        <ul>
        {FinalList.map((el,ind)=>
        <Comp
        el={el}
        key={ind}
        ind={ind}
        setChange={setChange}
        change={change}
        edind={edind}
        Edit={Edit}
        Save={Save}
        DeleteOne={DeleteOne}
        ontoggle={ontoggle}
        />
    )}
        </ul>
    );
}