import Layout from "../hocs/Layout"
import { connect } from 'react-redux';
import { 
    get_products_by_arrival, 
    get_products_by_sold 
} from '../redux/actions/products';
import { useEffect } from "react";
import Banner from '../components/home/Banner'
import ProductsArrival from '../components/home/ProductsArrival'
import ProductsSold from '../components/home/ProductsSold'
const Home = ({
    get_products_by_arrival, 
    get_products_by_sold,
    products_arrival,
    products_sold
}) => {

    useEffect(() => {
        window.scrollTo(0, 0);

        get_products_by_arrival();
        get_products_by_sold();
    }, []);

    return(
        <Layout>
            <div className="text-blue-500">
                <Banner/>
                <ProductsArrival data={products_arrival}/>
                <ProductsSold data={products_sold}/>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    products_arrival: state.Products.products_arrival,
    products_sold: state.Products.products_sold,
})

export default connect(mapStateToProps,{
    get_products_by_arrival, 
    get_products_by_sold,
}) (Home)