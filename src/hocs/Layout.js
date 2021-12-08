import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { check_authenticated, load_user, refresh } from '../redux/actions/auth';
import {
    get_items,
    get_total,
    get_item_total
} from "../redux/actions/cart";

import {
    get_user_profile
} from "../redux/actions/profile";

import { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';

const Layout = (props) => {

    useEffect(() => {
        props.refresh()
        props.check_authenticated()
        props.load_user()
        props.get_items()
        props.get_total()
        props.get_item_total()
        props.get_user_profile()
    }, []);

    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000} />
            {props.children}
            <Footer/>
        </div>
    )
}


export default connect(null, {
    check_authenticated,
    load_user,
    refresh,
    get_items,
    get_total,
    get_item_total,
    get_user_profile
}) (Layout)