import React from 'react';
import './DailyForecast.scss';

import {Row, Col} from 'antd';
import {iconUrlFromCode} from '../../services/weatherService';

const DailyForecast = ({items}) => {
    return (
        <div className="mt-2">
            <h4 className="text-white forecast-text">Daily Forecast</h4>

            <Row className="mt-1 align-center">
                {items.map((item, i) => (
                    <Col key={i} span={4}>
                        <h4 className="text-white text-uppercase">
                            {item.title}
                        </h4>
                        <div className="icon-container">
                            <img src={iconUrlFromCode(item.icon)} alt="" />
                        </div>

                        <h4 className="text-white">{`${item.temp.toFixed()}°`}</h4>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default DailyForecast;
