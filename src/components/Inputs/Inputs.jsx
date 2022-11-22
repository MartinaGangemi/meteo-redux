import React, {useState} from 'react';
import {Input} from 'antd';
import {useForm} from 'react-hook-form';

const Inputs = ({setQuery}) => {
    const [city, setCity] = useState('');

    const {handleSubmit} = useForm();

    const handleSearchClick = (e) => {
        if (city !== '') {
            setQuery({q: city});
            setCity(' ');
        }
    };

    return (
        <form onSubmit={handleSubmit(handleSearchClick)} className="mt-1">
            <Input
                className="inputCity"
                onChange={(e) => setCity(e.currentTarget.value)}
                placeholder="Search for city..."
                value={city}
            />
        </form>
    );
};

export default Inputs;
