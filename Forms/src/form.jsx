import { useState } from "react";

export default function Forms(){


    let [formdata,setformdata]= useState({fullname:"",username:"",password:""});


    let handlechange=(event)=>{

        setformdata((formdata)=>{

            return{
                ...formdata,
                [event.target.name]:event.target.value,
            }
        })
    }

    let handleSubmit=(event)=>{

        event.preventDefault();
        console.log(formdata);
        setformdata(
            formdata={
                fullname:"",
                username:"",
                password:"",
            }
        )
    }


    return (
        <>
        <form action="" onSubmit={handleSubmit}>

        <label htmlFor="fullname">Full Name : </label>
        <input type="text" id="fullname" value={formdata.fullname} placeholder="Fullname" name="fullname" onChange={handlechange}/>
        <br /><br />

        <label htmlFor="Username">Username : </label>
        <input type="text" id="Username" value={formdata.username} placeholder="Username" name="username" onChange={handlechange}/>
        <br /><br />

        <label htmlFor="password">Password : </label>
        <input type="password" id="password" value={formdata.password} placeholder="Password" name="password" onChange={handlechange}/>
        <br /><br />

        <button>Submit</button>

        </form>              
        </>
    )
}