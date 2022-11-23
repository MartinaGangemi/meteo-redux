import React from 'react';
import {Button, Row, Col} from 'antd';
import {useDispatch} from 'react-redux';
import {fetchWeather} from '../../app/weatherSlice';
import './TopButtons.scss';

const TopButtons = (city) => {
    const cities = ['Torino', 'Sidney', 'Tokyo', 'Paris'];
    const dispatch = useDispatch();

    return (
        <div>
            <Row gutter={[8, 8]}>
                {cities.map((city, i) => (
                    <Col key={i} span={6}>
                        <Button
                            onClick={() => dispatch(fetchWeather(city))}
                            type="primary"
                            className="button-primary"
                            block>
                            {city}
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TopButtons;
