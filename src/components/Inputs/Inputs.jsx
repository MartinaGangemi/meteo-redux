import {Input} from 'antd';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {fetchWeather} from '../../app/weatherSlice';

const Inputs = ({city, setCity}) => {
    const dispatch = useDispatch();
    const {handleSubmit} = useForm();
    return (
        <form
            onSubmit={handleSubmit(() => dispatch(fetchWeather(city)))}
            className="mt-1">
            <Input
                className="inputCity"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for city..."
            />
        </form>
    );
};

export default Inputs;
