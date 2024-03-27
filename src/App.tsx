import { useState } from "react";
import search_icon from "./assets/search.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import rain_icon from "./assets/rain.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
import humidity_icon from "./assets/humidity.png";
import Input from "./components/Input";
function App() {
  const [element, setElement] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [location, setLocation] = useState("");
  const [temprature, setTemprature] = useState(0);
  const [wicon, setWicon] = useState(cloud_icon);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const search = async () => {
    if (element === "") {
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setLocation(data.name);
    setTemprature(data.main.temp);
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-400 w-607 h-829 mx-auto mt-75 rounded-2xl">
      <div
        className="top-bar flex justify-center gap-14 pt-60"
        onClick={search}
      >
        <Input onChange={(e) => setElement(e.target.value)} />
        <div className="flex justify-center items-center px-8 py-4 bg-white rounded-full cursor-pointer">
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="mt-29 flex justify-center">
        <img src={wicon} alt="cloud" />
      </div>
      <div className="flex justify-center text-white text-7xl font-normal">
        {Math.floor(temprature)}°C
      </div>
      <div className="flex justify-center text-white text-3xl font-normal">
        {location}
      </div>
      <div className="mt-50 text-white flex justify-center">
        <div className="flex items-start gap-12 mx-auto">
          <img src={humidity_icon} alt="humidity" className="mt-3" />
          <div className="text-2xl font-normal">
            <div className="humidity-percent text-4xl">{humidity} %</div>
            <div className="text text-2xl">Humidity</div>
          </div>
        </div>
        <div className="flex items-start gap-12 mx-auto">
          <img src={wind_icon} alt="" className="icon mt-3" />
          <div className="text-2xl font-normal">
            <div className="text-4xl">{Math.floor(wind)} km/h</div>
            <div className="text text-2xl">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
