import { useEffect } from 'react';
import './_products.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Product/actions';
import { addCartItem } from '../../Redux/Cart';
import { Link } from 'react-router-dom';

export default function Products() {
    const productsData = useSelector(state => state.productReducer.products);
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, []);

    const addToCart = (item) => {
        console.log("item ", item)
        dispatch(addCartItem(item))
    }
console.log("cart ", cart)
    return (<div className='products-container'>
            {
                productsData.map(product => {
                    return (<>
                                <div className='mx-5 p-3 product-card'>
                                    <div className='product-image'>
                                        <Link to='/productDetail' state={product}>
                                            <img src={require(`../../assets/${product.product_img}`)}/>
                                        </Link>
                                    </div>
                                    <div className='product-info'>
                                        {/* <h5><a href='#'>{product.product_name}</a></h5> */}
                                        <h5><Link to='/productDetail' state={product}>{product.product_name}</Link></h5>
                                        <p className='product-price'>Rs. {product.price}</p>
                                        <div className='product-rating'>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <div className='cart-button' onClick={() => addToCart(product)}>
                                            <div className='cart-icon-conatiner'>
                                                <i className='fa fa-shopping-cart mx-4'/>
                                            </div>
                                            <div className='cart-text-container mx-3'>
                                                <p>Add to Cart</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                    )
                })
            }
    </div>)
}