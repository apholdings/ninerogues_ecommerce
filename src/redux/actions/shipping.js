import axios from 'axios';
import {
    GET_SHIPPING_OPTIONS_SUCCESS,
    GET_SHIPPING_OPTIONS_FAIL
} from './types';

export const get_shipping_options = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/shipping/get-shipping-options`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SHIPPING_OPTIONS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SHIPPING_OPTIONS_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_SHIPPING_OPTIONS_FAIL
        });
    }
};