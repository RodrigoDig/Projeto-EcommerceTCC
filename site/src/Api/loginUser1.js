import { API_URL } from './config.js';

import axios from 'axios';
import { useState } from 'react';


const api = axios.create({
    baseURL: API_URL
})

function initialState() {
    return { user: '', password: ''};
}

const UserLogin = () => {
    const {values, setValues} = useState(initialState);


    function onChange(event) {

        const {value, name} = event.target;
        setValues({
            ...values,
            [name]: value,
        });


    }

}