import {DateTime} from 'luxon';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log('Fetch problem' + err.message));
};

const deconstructCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone,
    } = data;

    const {main: description, icon} = weather[0];
    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        description,
        icon,
        speed,
        timezone,
    };
};

const formatForecastWeather = (data) => {
    return data.list

        .map((d) => {
            return {
                title: formatToLocalTime(d.dt, d.timezone, 'ccc'),
                weather: d.weather[0].description,
                temp: d.main.temp,
                icon: d.weather[0].icon,
            };
        })
        .filter(
            (value, i, self) =>
                i === self.findIndex((day) => day.title === value.title),
        )
        .slice(1, 6);
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather',
        searchParams,
    ).then(deconstructCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    const dailyForecast = await getWeatherData('forecast', {
        lat,
        lon,
        units: searchParams.units,
    }).then(formatForecastWeather);

    return {...formattedCurrentWeather, dailyForecast};
};

const formatToLocalTime = (secs, format = 'ccc') =>
    DateTime.fromSeconds(secs).toFormat(format);

const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7517d745b8mshb48dcd8a8f181c5p156f09jsnce6e068a7a50',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode, geoApiOptions};
