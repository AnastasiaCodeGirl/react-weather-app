import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] =useState({ready: false});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            date: "Wednesday 03:15",
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon_url,
            ready: true,
        });
    }
    if(weatherData.ready)
    {
        return (<div className="Weather">
        <h1>{weatherData.city}</h1>
       
          <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            </div>
          </form>
        
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
            />
          
          <div className="float-left">
              <span className="temparature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
          </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} kmH</li>
            </ul>
          </div>
        </div>
      </div> 
      );
    }
    else{
        const apiKey="fed24a4a3934t32fo5a63bbe36a70167";
        let city= "London";
        let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading...";
    }
}