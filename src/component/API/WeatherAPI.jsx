import axios from "axios";
import { useState } from "react";


// const key = "8886a961fc8d89e29dfc2eaa7deb8f1c";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;


export default function WeatherAPI() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    function handleInput(e) {
        setCity(e.target.value);
    }

    function WeatherAPI_Request() {
        const key = "8886a961fc8d89e29dfc2eaa7deb8f1c";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

        axios.get(url).then((response) => {
            setWeather(response.data);
        }).catch((error) => {
            setWeather(null);
            console.error("Error fetching weather data:", error);
        });
    }

    return (
        <>
            <h1 className="my-10 font-bold text-4xl">Weather API</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="mt-4">
                    <input onChange={handleInput} value={city}
                        type="text"
                        placeholder="Enter city name"
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                    <button onClick={WeatherAPI_Request} className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 cursor-pointer">Get Weather</button>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Weather Details</h3>
                    {weather ? (
                        <>
                            <p className="text-gray-300">Temperature: {weather.main?.temp}°C</p>
                            <p className="text-gray-300">Humidity: {weather.main?.humidity}%</p>
                            <p className="text-gray-300 capitalize">Condition: {weather.weather?.[0]?.description}</p>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-300">Temperature: °C</p>
                            <p className="text-gray-300">Humidity: %</p>
                            <p className="text-gray-300">Condition: </p>
                        </>
                    )}
                </div>
                {/* <div className="mt-4">
                    <h3 className="text-xl font-semibold">Forecast</h3>
                    <ul className="list-disc list-inside">
                        <li>Monday: 26°C, Sunny</li>
                        <li>Tuesday: 24°C, Cloudy</li>
                        <li>Wednesday: 22°C, Rainy</li>
                    </ul>
                </div> */}
            </div>
        </>
    );
}