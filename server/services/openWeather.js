import axios from "axios";

export async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_KEY}&units=metric`;

    const res = await axios.get(url);
    const w = res.data;

    return {
        city: w.name,
        country: w.sys.country,
        temperature: w.main.temp,
        feels_like: w.main.feels_like,
        humidity: w.main.humidity,
        pressure: w.main.pressure,
        description: w.weather[0].description,
        icon: w.weather[0].icon,
        coordinates: {
            lat: w.coord.lat,
            lon: w.coord.lon
        },
        wind_speed: w.wind.speed,
        rain_3h: w.rain ? w.rain["3h"] || 0 : 0
    };
}
