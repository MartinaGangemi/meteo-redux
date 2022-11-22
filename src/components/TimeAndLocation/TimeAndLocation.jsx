import React from 'react';
import {Row, Col} from 'antd';

const TimeAndLocation = () => {
    return (
        <Row justify="center" className="mt-1 align-center ">
            <Col span={24}>
                <h4 className="text-white">Today</h4>
            </Col>
            <Col span={24}>
                <h2 className="text-white"></h2>
            </Col>
        </Row>
    );
};

export default TimeAndLocation;
