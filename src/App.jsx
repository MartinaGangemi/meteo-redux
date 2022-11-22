import {useState, useEffect} from 'react';
import {Layout} from 'antd';
const {Content} = Layout;
import TopButtons from './components/TopButtons/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import DailyForecast from './components/DailyForecast';
import getFormattedWeatherData from './services/weatherService';

import './css/style.scss';

function App() {
    const [query, setQuery] = useState({q: 'berlin'});
    const units = 'metric';
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units}).then((data) => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query, units]);

    return (
        <Layout>
            <Content className="site-layout-background">
                <div className="container">
                    <TopButtons setQuery={setQuery} />
                    <Inputs query={query} setQuery={setQuery} />

                    {weather && (
                        <div>
                            <TimeAndLocation weather={weather} />
                            <Details weather={weather} />
                            <DailyForecast items={weather.dailyForecast} />
                        </div>
                    )}
                </div>
            </Content>
        </Layout>
    );
}

export default App;
