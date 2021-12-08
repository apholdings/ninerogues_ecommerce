import { combineReducers } from 'redux';
import Auth from './auth';
import Alert from './alert';
import Categories from './categories';
import Products from './products';
import Cart from './cart';
import Shipping from './shipping';
import Payment from './payment';
import Orders from './orders';
import Coupons from './coupons';
import Profile from './profile';
import Wishlist from './wishlist';
import Reviews from './reviews';

export default combineReducers({
    Auth,
    Alert,
    Categories,
    Products,
    Cart,
    Shipping,
    Payment,
    Orders,
    Coupons,
    Profile,
    Wishlist,
    Reviews
})