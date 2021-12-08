import {
    ADD_ITEM,
    GET_TOTAL,
    GET_ITEM_TOTAL,
    GET_ITEMS,
    UPDATE_ITEM,
    REMOVE_ITEM,
    EMPTY_CART,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    GET_TOTAL_SUCCESS,
    GET_TOTAL_FAIL,
    GET_ITEM_TOTAL_SUCCESS,
    GET_ITEM_TOTAL_FAIL,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAIL,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAIL,
    REMOVE_ITEM_SUCCESS,
    REMOVE_ITEM_FAIL,
    EMPTY_CART_SUCCESS,
    EMPTY_CART_FAIL,
    SYNCH_CART_SUCCESS,
    SYNCH_CART_FAIL,
} from '../actions/types';

const initialState = {
    items: null,
    amount: 0.00,
    compare_amount: 0.00,
    total_items: 0
};

export default function Cart(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: payload.cart
            };
        case ADD_ITEM_FAIL:
            return {
                ...state,
                items: null
            };
        case ADD_ITEM:
            localStorage.setItem('cart', JSON.stringify(payload));
            return {
                ...state,
                items: JSON.parse(localStorage.getItem('cart'))
            };
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                items: payload.cart
            };
        case GET_ITEMS_FAIL:
            return {
                ...state,
                items: null
            };
        case GET_ITEMS:
            return {
                ...state,
                items: JSON.parse(localStorage.getItem('cart'))
            };
        case GET_TOTAL_SUCCESS:
            return {
                ...state,
                amount: payload.total_cost,
                compare_amount: payload.total_compare_cost
            };
        case GET_TOTAL_FAIL:
            return {
                ...state,
                amount: 0.00,
                compare_amount: 0.00
            };
        case GET_TOTAL:
            return {
                ...state,
                amount: payload[0],
                compare_amount: payload[1]
            };
        case GET_ITEM_TOTAL_SUCCESS:
            return {
                ...state,
                total_items: payload.total_items
            };
        case GET_ITEM_TOTAL_FAIL:
            return {
                ...state,
                total_items: 0
            };
        case GET_ITEM_TOTAL:
            return {
                ...state,
                total_items: payload
            };
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                items: payload.cart
            };
        case UPDATE_ITEM_FAIL:
            return {
                ...state
            };
        case UPDATE_ITEM:
            localStorage.setItem('cart', JSON.stringify(payload));
            return {
                ...state,
                items: JSON.parse(localStorage.getItem('cart'))
            };
        case REMOVE_ITEM_SUCCESS:
            return {
                ...state,
                items: payload.cart
            };
        case REMOVE_ITEM_FAIL:
            return {
                ...state
            };
        case REMOVE_ITEM:
            localStorage.setItem('cart', JSON.stringify(payload));
            return {
                ...state,
                items: JSON.parse(localStorage.getItem('cart'))
            };
        case EMPTY_CART_SUCCESS:
        case EMPTY_CART_FAIL:
            return {
                ...state,
                items: null,
                amount: 0.00,
                compare_amount: 0.00,
                total_items: 0
            };
        case EMPTY_CART:
            localStorage.removeItem('cart');
            return {
                items: null,
                amount: 0.00,
                compare_amount: 0.00,
                total_items: 0
            };
        case SYNCH_CART_SUCCESS:
        case SYNCH_CART_FAIL:
            localStorage.removeItem('cart');
            return {
                ...state
            };
        default:
            return state;
    }
}