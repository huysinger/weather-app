import React from "react";
import moment from "moment/moment";

const Weather = ({ weatherData }) => (
  <div className="text-center bg-blue-200 p-10 rounded-xl">
    <h1 className="text-2xl font-bold">{weatherData.name}</h1>
    <p className="text-xl text-gray-500">
      {Math.ceil(weatherData.main.temp - 273.15)}&deg;C
    </p>
    <p>
      Sunrise:{" "}
      {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
    </p>
    <p>
      Sunset:{" "}
      {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
    </p>
    <p>Description: {weatherData.weather[0].main}</p>
    <p>Humidity: {weatherData.main.humidity} %</p>
    <p>Day: {moment().format("dddd")}</p>
    <p>Date: {moment().format("LL")}</p>
  </div>
);

export default Weather;
