import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (payload, {rejectWithValue, getState, dispatch}) => {
        const url = `${BASE_URL}/weather?q=${payload}&appid=${API_KEY}&units=metric`;

        return await fetch(url)
            .then((response) => response.json())
            .then((data) => data)
            .catch((err) => console.log('Fetch problem' + err.message));
    },
);

const weatherSlice = createSlice({
    name: 'wheather',
    initialState: {data: 'Loading'},
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
            state.error = action?.payload;
        });
    },
});

export const selectAllWeathers = (state) => state.weather;
export default weatherSlice.reducer;
