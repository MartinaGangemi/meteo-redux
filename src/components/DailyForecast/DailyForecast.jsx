import React from 'react';
import './DailyForecast.scss';

import {Row, Col} from 'antd';

const DailyForecast = ({dailyForecast}) => {
    return (
        <div className="mt-2">
            <h4 className="text-white forecast-text">Daily Forecast</h4>

            <Row className="mt-1 align-center">
                {dailyForecast.map((item, i) => (
                    <Col key={i} span={4}>
                        <h4 className="text-white text-uppercase">
                            {item.title}
                        </h4>
                        <div className="icon-container">
                            <img
                                src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                alt=""
                            />
                        </div>

                        <h4 className="text-white">{`${item.temp.toFixed()}°`}</h4>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default DailyForecast;
