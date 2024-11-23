import { useState } from "react";

export default function Counter(){

    let [count,setcount]=useState(0);

    let inc_count=()=>{

        setcount((count)=>{
            return count+1;
        });
    }

    return(
        <>
        <h1>Counter</h1><br />
        <button onClick={inc_count}>Count : {count}</button>
        </>
    )

}