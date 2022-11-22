import React from 'react';
import './DailyForecast.scss';

import {Row, Col} from 'antd';

const DailyForecast = () => {
    return (
        <div className="mt-2">
            <h4 className="text-white forecast-text">Daily Forecast</h4>

            <Row className="mt-1 align-center">
                <Col span={4}>
                    <h4 className="text-white text-uppercase"></h4>
                    <div className="icon-container">img</div>

                    <h4 className="text-white"></h4>
                </Col>
            </Row>
        </div>
    );
};

export default DailyForecast;
