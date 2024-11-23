import { useState } from "react";

export default function Like(){

    let [like,setlike]= useState(false);

    let toggle=()=>{

        setlike((like)=>{
        return !like
        });
    }

    let styles={color:"red",fontSize:"100px"}

    return(
        <>
        <h1>Like !!</h1>

        {like?<p onClick={toggle}><i style={styles} className="fa-solid fa-heart"></i></p>:<p  onClick={toggle}><i style={{fontSize:"100px"}} className="fa-regular fa-heart"></i></p>}
        </>
    )
    
}