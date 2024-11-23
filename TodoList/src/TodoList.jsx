import { useState } from "react";
let count=0;

export default function Todo(){

    let [todo,settodo]= useState([{task:"run",id:count,done:false}]);
    let [newtask,setnewtodo]=useState("run")

    let newtodo= ( event)=>{

        console.log(event.target.value);
        setnewtodo( 
            newtask=event.target.value
        )
        
    }

    let addtask =()=>{

        count++;
        console.log("clicked!!");
        settodo((todo)=>{

            return [...todo,{task:newtask,id:count,done:false}]
        });
        setnewtodo("")
    }

    let deletetodo = (id)=>{

        console.log("delete Working ID: "+id);
        settodo((todo)=>{

            return todo.filter((item) => item.id !== id);
        })
    }

    let upercaseall=()=>{

        settodo(

            todo.map((el)=>{
                
                return {
                ...el,
                task:el.task.toUpperCase(),
                }
            })
        )
    }

    let uppercase=(id)=>{

        settodo(

            todo.map((el)=>{
                
                if(el.id==id){
                return {
                ...el,
                task:el.task.toUpperCase(),
                }
                }
                else{
                    return el;
                }
            })
        )
    }

    let markdoneall=()=>{

        settodo(

            todo.map((el)=>{
                return{
                    ...el,
                    done:true,
                }

            })
        )
    }


    let markdone=(id)=>{

        settodo(

            todo.map((el)=>{
                if(el.id==id){
                return{
                    ...el,
                    done:true,
                }
                }else{
                    return el;
                }

            })
        )
    }


    return(

        <>
        <label htmlFor="task"><h2>Task Title : </h2></label><br />
        <input type="text" id="task" value={newtask} onChange={newtodo} style={{height:"3rem",width:"12rem",borderRadius:"1rem",border:"none",padding:"1rem", fontSize:"large"}}/>
        <br /><br />
        <button onClick={addtask}>Add Task</button>
        <br /><br /><br />
        <hr />
        
        <ul >

            {todo.map((el)=>{
                return <li key={el.id}>
                    {el.done?<span style={{fontSize:"2rem",marginRight:"1rem",textDecorationLine:"line-through"}}>{el.task}</span>:<span style={{fontSize:"2rem",marginRight:"1rem"}}>{el.task}</span>}
                    
                    <button onClick={()=>deletetodo(el.id)} style={{marginRight:"1rem"}}> Delete</button>
                    <button onClick={()=>uppercase(el.id)} style={{marginRight:"1rem"}}> UpperCase</button>
                    <button onClick={()=>markdone(el.id)}> Mark as Done</button>
                </li>
            })}
        </ul>
        <br />
        <hr />
        <br />
        <button onClick={upercaseall} style={{marginRight:"1rem"}}>Upper Case All</button>
        <button onClick={markdoneall} style={{marginRight:"1rem"}}>Mark as Done All</button>
        </>
    )
}