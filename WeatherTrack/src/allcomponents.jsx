import { useState } from "react";
import Input from './Input'
import Cards from './card'

export default function ParentComponent(){

    let[weather,setweather]=useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        maxtemp: 25.05,
        mintemp: 25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateweather=(info)=>{

        setweather(info);
    }

    return (

        <>
        <Input updateweather={updateweather}></Input>
        <Cards info={weather}></Cards>
      </>
    )
}