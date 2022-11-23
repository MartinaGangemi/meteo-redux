import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//import axios from 'axios';
import {DateTime} from 'luxon';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    // async (payload, {rejectWithValue, getState, dispatch}) => {
    //     const url = `${BASE_URL}/weather?q=${payload}&appid=${API_KEY}&units=metric`;
    //     return await fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => data)
    //         .catch((err) => {
    //             console.log('pippo');
    //             return rejectWithValue(err?.response?.data);
    //         });
    // },

    async (payload, {rejectWithValue, getState, dispatch}) => {
        const cityUrl = `${BASE_URL}/weather?q=${payload}&appid=${API_KEY}&units=metric`;

        try {
            const cityRes = await fetch(cityUrl);
            const cityData = await cityRes.json();
            //console.log(cityData);

            const {lon, lat} = cityData.coord;

            const dailyForecast = await getDailyForecast(lat, lon);

            const weather = {dailyForecast, ...cityData};
            return weather;
        } catch (err) {
            console.error(err);
            return rejectWithValue(err?.response?.data);
        }
    },

    // async (payload, {rejectWithValue, getState, dispatch}) => {
    //     try {
    //         const {data} = await axios.get(
    //             `${BASE_URL}/weather?q=${payload}&appid=${API_KEY}&units=metric`,
    //         );
    //         return data;
    //     } catch (error) {
    //         console.error('pippo');
    //         return rejectWithValue(error?.response?.data);
    //     }
    // },
);

const getDailyForecast = async (lat, lon) => {
    const dailyUrl = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const dailyRes = await fetch(dailyUrl);
    const dailyData = await dailyRes.json();

    const dailyForecast = await dailyData.list
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

//export const selectAllWeathers = (state) => state;
export default weatherSlice.reducer;
