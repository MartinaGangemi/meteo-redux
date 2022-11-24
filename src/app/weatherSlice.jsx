import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {DateTime} from 'luxon';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',

    async (payload, {rejectWithValue, getState, dispatch}) => {
        const url = `${BASE_URL}/weather?q=${payload}&appid=${API_KEY}&units=metric`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            //console.log(data);

            const {lon, lat} = data.coord;

            const dailyForecast = await getDailyForecast(lat, lon);

            const weather = {dailyForecast, ...data};
            return weather;
        } catch (err) {
            console.error(err);
            return rejectWithValue(err?.response?.data);
        }
    },
);

const getDailyForecast = async (lat, lon) => {
    const dailyUrl = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const res = await fetch(dailyUrl);
    const data = await res.json();

    const dailyForecast = await data.list
        .map((d) => {
            return {
                title: formatToLocalTime(d.dt, 'ccc'),
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

    return dailyForecast;
};

export const formatToLocalTime = (secs, format = 'ccc') =>
    DateTime.fromSeconds(secs).toFormat(format);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = true;
        });
    },
});

export default weatherSlice.reducer;
