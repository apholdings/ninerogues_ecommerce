
import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_BY_ARRIVAL_SUCCESS,
    GET_PRODUCTS_BY_ARRIVAL_FAIL,
    GET_PRODUCTS_BY_SOLD_SUCCESS,
    GET_PRODUCTS_BY_SOLD_FAIL,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_FAIL,
    RELATED_PRODUCTS_SUCCESS,
    RELATED_PRODUCTS_FAIL,
    FILTER_PRODUCTS_SUCCESS,
    FILTER_PRODUCTS_FAIL
} from '../actions/types';


const initialState = {
    products: null,
    products_arrival: null,
    products_sold: null,
    product: null,
    search_products: null,
    related_products: null,
    filtered_products: null
};

export default function Products(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload.products
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                products: null
            }
        case GET_PRODUCTS_BY_ARRIVAL_SUCCESS:
            return {
                ...state,
                products_arrival: payload.products
            }
        case GET_PRODUCTS_BY_ARRIVAL_FAIL:
            return {
                ...state,
                products_arrival: null
            }
        case GET_PRODUCTS_BY_SOLD_SUCCESS:
            return {
                ...state,
                products_sold: payload.products
            }
        case GET_PRODUCTS_BY_SOLD_FAIL:
            return {
                ...state,
                products_sold: null
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: payload.product
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                product: null
            }
        case RELATED_PRODUCTS_SUCCESS:
            return {
                ...state,
                related_products: payload.related_products
            }
        case RELATED_PRODUCTS_FAIL:
            return {
                ...state,
                related_products: null
            }
        case FILTER_PRODUCTS_SUCCESS:
            return {
                ...state,
                filtered_products: payload.filtered_products
            }
        case FILTER_PRODUCTS_FAIL:
            return {
                ...state,
                filtered_products: null
            }
        case SEARCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                search_products: payload.search_products
            }
        case SEARCH_PRODUCTS_FAIL:
            return {
                ...state,
                search_products: null
            }
        default:
            return state
    }
}