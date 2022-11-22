import React from 'react';
import {Button, Row, Col} from 'antd';
import './TopButtons.scss';

const TopButtons = ({setQuery}) => {
    const cities = ['Torino', 'Sidney', 'Tokyo', 'Paris'];

    return (
        <div>
            <Row gutter={[8, 8]}>
                {cities.map((city, i) => (
                    <Col key={i} span={6}>
                        <Button
                            onClick={() => setQuery({q: city})}
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
