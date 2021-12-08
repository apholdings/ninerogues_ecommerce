import {
    GET_COUPON_SUCCESS,
    GET_COUPON_FAIL,
} from '../actions/types';

const initialState = {
    coupon: null
};


export default function Coupons(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_COUPON_SUCCESS:
            return {
                ...state,
                coupon: payload.coupon
            }
        case GET_COUPON_FAIL:
            return {
                ...state,
                coupon: null
            }
        default:
            return state;
    }
}