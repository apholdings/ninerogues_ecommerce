import axios from 'axios';
import {
    GET_WISHLIST_ITEMS_SUCCESS,
    GET_WISHLIST_ITEMS_FAIL,
    ADD_WISHLIST_ITEM_SUCCESS,
    ADD_WISHLIST_ITEM_FAIL,
    GET_WISHLIST_ITEM_TOTAL_SUCCESS,
    GET_WISHLIST_ITEM_TOTAL_FAIL,
    REMOVE_WISHLIST_ITEM_SUCCESS,
    REMOVE_WISHLIST_ITEM_FAIL,
    CLEAR_WISHLIST,
} from './types';

export const get_wishlist_items = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/wishlist/wishlist-items`, config);

            if (res.status === 200) {
                dispatch({
                    type: GET_WISHLIST_ITEMS_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_WISHLIST_ITEMS_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: GET_WISHLIST_ITEMS_FAIL
            });
        }
    }
}

export const add_wishlist_item = product_id => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };

        const body = JSON.stringify({
            product_id
        });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/wishlist/add-item`, body, config);

            if (res.status === 201) {
                dispatch({
                    type: ADD_WISHLIST_ITEM_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: ADD_WISHLIST_ITEM_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: ADD_WISHLIST_ITEM_FAIL
            });
        }
    }
}

export const get_wishlist_item_total = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        };
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/wishlist/get-item-total`, config);

            if (res.status === 200) {
                dispatch({
                    type: GET_WISHLIST_ITEM_TOTAL_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_WISHLIST_ITEM_TOTAL_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: GET_WISHLIST_ITEM_TOTAL_FAIL
            });
        }
    }
}

export const remove_wishlist_item = product_id => async dispatch => {
    if (localStorage.getItem('access')) {
        const body = JSON.stringify({
            product_id
        });

        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: body
        };

        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/wishlist/remove-item`, config);

            if (res.status === 200) {
                dispatch({
                    type: REMOVE_WISHLIST_ITEM_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: REMOVE_WISHLIST_ITEM_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: REMOVE_WISHLIST_ITEM_FAIL
            });
        }
    }

}

export const clear_wishlist = () => dispatch => {
    dispatch({
        type: CLEAR_WISHLIST
    });
};