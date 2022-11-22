import {useState, useEffect} from 'react';
import {Layout} from 'antd';
const {Content} = Layout;
import TopButtons from './components/TopButtons/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import DailyForecast from './components/DailyForecast';
import {useSelector} from 'react-redux';
import {selectAllWeathers} from './app/weatherSlice';
import {fetchWeather} from './app/weatherSlice';
import {useDispatch} from 'react-redux';

import './css/style.scss';

function App() {
    const weather = useSelector(selectAllWeathers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather('berlin'));
    }, []);

    return (
        <Layout>
            <Content className="site-layout-background">
                <div className="container">
                    <TopButtons />
                    <Inputs />

                    <div>
                        <TimeAndLocation />
                        <Details />
                        <DailyForecast />
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default App;
