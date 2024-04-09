import {useLocation} from 'react-router-dom';
import './_product-details.scss';
import { useDispatch} from 'react-redux';
import { addCartItem } from '../../Redux/Cart';

export default function ProductDetails() {
    const location = useLocation();
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addCartItem(location.state))
    }

    console.log("Location ", location)
    return(
        <div className='product-detail'>
            <div className='product-img'>
                <img src={require('../../assets/' + location.state.product_img)}/>
            </div>
            <div>
                <div className='product-info'>
                    <p className='product-price'>Rs. {location.state.price}</p>
                    <div className='product-rating'>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                    </div>
                </div>
                <div className='my-3'>
                    <div className='cart-button' onClick={addToCart}>
                        <div className='cart-icon-conatiner'>
                            <i className='fa fa-shopping-cart mx-4'/>
                        </div>
                        <div className='cart-text-container mx-3'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}