import {Input} from 'antd';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

import {fetchWeather} from '../../app/weatherSlice';

const Inputs = ({city, setCity}) => {
    const dispatch = useDispatch();
    const {handleSubmit} = useForm();
    const pippo = () => {
        dispatch(fetchWeather(city));
        setCity('');
    };
    return (
        <form onSubmit={handleSubmit(pippo)} className="mt-1">
            <Input
                className="inputCity"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for city..."
                value={city}
            />
        </form>
    );
};

export default Inputs;
