import React, {useState} from "react";
import "./Weather.css";
import { Hourglass } from 'react-loader-spinner'
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] =useState({ready: false});
    function handleResponse(response){
        setWeatherData({
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000),
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon_url,
            ready: true,
        });
    }
    if(weatherData.ready)
    {
        return (<div className="Weather">
       
       
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
              <input type="submit" value="Search" className="btn btn-primary w-100" autoFocus="on"/>
            </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date}/>
            </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clerfix">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />
          
         
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
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
        return <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
        />;
    }
}