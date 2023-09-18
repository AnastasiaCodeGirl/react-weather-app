import React, {useState} from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props)
{
    const [unit, setUnit] = useState('celsius');
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function backToCelsius(event){
        event.preventDefault();
        setUnit('celsius');
    }
    if( unit === "celsius"){
        return (
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C | <a href="/" onClick={convertToFahrenheit}>°F</a></span>
        </div>);
    }
    else{
        let fahrenheitTemp = (props.celsius * 9/5) + 32;
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheitTemp)}</span>
                <span className="unit"><a href="/" onClick={backToCelsius}>°C</a> | °F</span>
            </div>);
    }
}