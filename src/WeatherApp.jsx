import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp (){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Jabalpur",
        feelsLike: 24.2,
        temp: 25,
        tempMin: 24.25,
        tempMax: 25.80,
        humidity: 55,
        weatherDesc: "scattered clouds",

    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    }

    return (
    <div style={{textAlign: "center"
    }}>
        <h2>Weather App by Harshil Oza</h2>
        <hr></hr>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <InfoBox info={weatherInfo}></InfoBox>
    </div>  
    )
}