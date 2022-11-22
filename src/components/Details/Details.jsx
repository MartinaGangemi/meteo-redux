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

const Details = ({}) => {
    return (
        <div>
            <Row className=" align-center ">
                <Col span={24}>
                    <h3 className="text-white"></h3>
                </Col>
                <Col span={8}>
                    <div className="icon-container">immagine</div>
                </Col>
                <Col span={8}>
                    <h2 className="text-white"></h2>
                </Col>
                <Col span={8} className="weather-details">
                    <p>
                        <FontAwesomeIcon icon={faTemperature0} />
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faDroplet} />
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faWind} />
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
                    <FontAwesomeIcon icon={faMoon} /> Set:{' '}
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </Col>
            </Row>
        </div>
    );
};

export default Details;
