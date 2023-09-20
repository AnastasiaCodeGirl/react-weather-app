import React, {useState} from "react";
import "./Weather.css";
import { Hourglass } from 'react-loader-spinner'
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] =useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
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
    function handleSubmit(event){
      event.preventDefault();
      setWeatherData({ready: false});
    }
    function handleCityChange(event){
      setCity(event.target.value);
    }
    function search(){
      const apiKey="fed24a4a3934t32fo5a63bbe36a70167";
        let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if(weatherData.ready)
    {
        return (<div className="Weather">
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" autoFocus="on" />
            </div>
            </div>
          </form>
          <WeatherInfo data={weatherData}/>
          <WeatherForecast city={weatherData.city} />
          </div>);}
    else{
        search();
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