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

    const {weather, loading, error} = state;

    console.log(state);

    return (
        <Layout>
            <Content className="site-layout-background">
                <div className="container">
                    <TopButtons city={city} />
                    <Inputs city={city} setCity={setCity} />
                    {error ? (
                        <main className="error-loading-message">
                            <h1 className="text-white center">
                                City not found!
                            </h1>
                        </main>
                    ) : loading ? (
                        <main className="error-loading-message">
                            <h1 className="text-white center">...Loading</h1>
                        </main>
                    ) : (
                        <main>
                            <TimeAndLocation weather={state.weather} />
                            <Details weather={state.weather} />
                            <DailyForecast
                                dailyForecast={state.weather?.dailyForecast}
                            />
                        </main>
                    )}
                </div>
            </Content>
        </Layout>
    );
}

export default App;
