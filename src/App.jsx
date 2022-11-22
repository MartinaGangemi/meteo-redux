import {useEffect} from 'react';
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
    const state = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather('berlin'));
    }, []);

    const {weather, loading, error} = state;

    console.log(state);

    return (
        <Layout>
            <Content className="site-layout-background">
                <div className="container">
                    <TopButtons />
                    <Inputs />
                    {weather && (
                        <div>
                            <TimeAndLocation weather={state.weather} />
                            <Details weather={state.weather} />
                            <DailyForecast />
                        </div>
                    )}
                </div>
            </Content>
        </Layout>
    );
}

export default App;
