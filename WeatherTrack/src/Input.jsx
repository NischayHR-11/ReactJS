import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Input({updateweather}){

    let[city,setcity]=useState("");

    let handlechange=(event)=>{

        setcity(event.target.value);
    }

    const url=`https://api.openweathermap.org/data/2.5/weather`;

    let handleClick= async ()=>{

        let res = await fetch(url+`?q=${city}&appid=c7cab284d33cb1caf3168ae92140bf40&units=metric`);
        let response= await res.json();
        console.log(response);        
        let result={
            city:response.name,
            temp:response.main.temp,
            maxtemp:response.main.temp_max,
            mintemp:response.main.temp_min,
            humidity:response.main.humidity,
            feelslike:response.main.feels_like,
            weather:response.weather[0].description,
        }
        updateweather(result);
        // setcity("");
    }
    




    return(
        <>
        <h1>Track Weather</h1>
        <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handlechange} placeholder="Enter The City Name"/>
        <br />
        <Button variant="contained" style={{marginTop:"1rem"}} onClick={handleClick}>Check</Button>
        </>
    )
}