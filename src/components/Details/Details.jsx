import React from 'react';
import {Row, Col} from 'antd';
import './Details.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faSun,
    faWind,
    faDroplet,
    faTemperature0,
    faArrowUp,
    faArrowDown,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

const Details = ({weather}) => {
    return (
        <div>
            <Row className=" align-center ">
                <Col span={24}>
                    <h3 className="text-white">
                        {weather?.weather[0].description}
                    </h3>
                </Col>
                <Col span={8}>
                    <div className="icon-container">
                        {weather?.name}
                        <img
                            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                            alt={weather?.weather[0].main}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <h2 className="text-white"></h2>
                </Col>
                <Col span={8} className="weather-details">
                    <p>
                        <FontAwesomeIcon icon={faTemperature0} />{' '}
                        {weather?.main.temp.toFixed()}°
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faDroplet} />{' '}
                        {weather?.main.humidity.toFixed()}%
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faWind} />{' '}
                        {weather?.wind.speed.toFixed()}%
                    </p>
                </Col>
            </Row>

            <Row className="mt-2  align-center ">
                <Col span={5}>
                    <FontAwesomeIcon icon={faSun} /> Rise:{' '}
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faMoon} />
                    {/* fixare */}
                    Set: {weather?.sys.sunset}°
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faArrowUp} />{' '}
                    {weather?.main.temp_max.toFixed()}°
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faArrowDown} />{' '}
                    {weather?.main.temp_min.toFixed()}°
                </Col>
            </Row>
        </div>
    );
};

export default Details;
