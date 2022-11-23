import {useEffect, useState} from 'react';
import {Layout} from 'antd';
const {Content} = Layout;

import TopButtons from './components/TopButtons/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import DailyForecast from './components/DailyForecast';

import {useSelector, useDispatch} from 'react-redux';
//import {selectAllWeathers} from './app/weatherSlice';
import {fetchWeather} from './app/weatherSlice';

import './css/style.scss';

function App() {
    const [city, setCity] = useState('london ');
    const state = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather(city));
    }, [dispatch]);

    const {weather, loading} = state;

    console.log(state.weather?.dailyForecast);

    return (
        <Layout>
            <Content className="site-layout-background">
                <div className="container">
                    <TopButtons />
                    <Inputs city={city} setCity={setCity} />
                    {weather?.cod === '404' ? (
                        <h1>{weather.message}</h1>
                    ) : loading ? (
                        <h1>...Loading</h1>
                    ) : (
                        <div>
                            <TimeAndLocation weather={state.weather} />
                            <Details weather={state.weather} />
                            <DailyForecast
                                dailyForecast={state.weather?.dailyForecast}
                            />
                        </div>
                    )}
                </div>
            </Content>
        </Layout>
    );
}

export default App;
