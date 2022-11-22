import React, {useState} from 'react';
import {Input} from 'antd';
import {useForm} from 'react-hook-form';

const Inputs = () => {
    return (
        <form className="mt-1">
            <Input
                className="inputCity"
                //onChange={}
                placeholder="Search for city..."
                // value={city}
            />
        </form>
    );
};

export default Inputs;
