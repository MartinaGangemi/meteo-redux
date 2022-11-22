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
import {
    formatToLocalTime,
    iconUrlFromCode,
} from '../../services/weatherService';

const Details = ({
    weather: {
        description,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        humidity,
        feels_like,
        timezone,
        speed,
    },
}) => {
    return (
        <div>
            <Row className=" align-center ">
                <Col span={24}>
                    <h3 className="text-white">{description}</h3>
                </Col>
                <Col span={8}>
                    <div className="icon-container">
                        <img src={iconUrlFromCode(icon)} alt="" />
                    </div>
                </Col>
                <Col span={8}>
                    <h2 className="text-white">{`${temp.toFixed()}°`}</h2>
                </Col>
                <Col span={8} className="weather-details">
                    <p>
                        <FontAwesomeIcon icon={faTemperature0} />{' '}
                        {`${feels_like.toFixed()}°`}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faDroplet} /> {humidity}%
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faWind} /> {speed}Km/h
                    </p>
                </Col>
            </Row>

            <Row className="mt-2  align-center ">
                <Col span={5}>
                    <FontAwesomeIcon icon={faSun} /> Rise:{' '}
                    {formatToLocalTime(sunrise, 'hh:mm a')}
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faMoon} /> Set:{' '}
                    {formatToLocalTime(sunset, 'hh:mm a')}
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faArrowUp} />{' '}
                    {`${temp_max.toFixed()}°`}
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faArrowDown} />{' '}
                    {`${temp_min.toFixed()}°`}
                </Col>
            </Row>
        </div>
    );
};

export default Details;
