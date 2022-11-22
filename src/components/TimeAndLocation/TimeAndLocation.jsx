import React from 'react';
import {Row, Col} from 'antd';

const TimeAndLocation = ({weather}) => {
    return (
        <Row justify="center" className="mt-1 align-center ">
            <Col span={24}>
                <h4 className="text-white">Today</h4>
            </Col>
            <Col span={24}>
                <h2 className="text-white">
                    {weather.name}, {weather.sys.country}
                </h2>
            </Col>
        </Row>
    );
};

export default TimeAndLocation;
