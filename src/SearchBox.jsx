import TextField from '@mui/material/TextField';
//import Box from '@mui/material/Box';
//import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "c019f9473e4ee85dc789099405f0ed46";

    // eslint-disable-next-line no-unused-vars
    let getWeatherInfo = async () => {

       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity, 
            feelsLike: jsonResponse.main.feels_like,
            weatherDesc: jsonResponse.weather[0].description,
        };

        console.log(result);
        return result; 
    }catch(error) {
        throw new Error(error);
        
    }
    };

    
    let handleChange =  (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(error){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
         
            <form onSubmit={handleSubmit}>
            {/* <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off"> */}
              <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>&nbsp;&nbsp;
              <Button variant="contained" type='submit' size='large'>Search</Button>
            {/* </Box> */}
            {error && <p style={{color: 'red'}}>No such place exists in our API</p>}
            </form>
        </div>
    )
}