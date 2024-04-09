import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteItem} from '../../Redux/Cart'


export default function Cart() {

    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    console.log(cart)

    const deleteItemFromCart = (cartItem) => {
console.log(cartItem)
        dispatch(deleteItem(cartItem));
    }

    return( 
        <>
            {
                cart.cartItems.length ? 
                <>
                <h1> Cart</h1>
                {
                    cart.cartItems.map(cartItem => {
                        return (<div style={{border: '1px solid black', padding: '2em'}}>
                            <img src={require('../../assets/' + cartItem.product_img)} style={{height: '5em', width: '5em'}}/>
                            <h3>{cartItem.product_name} - {cartItem.price}</h3>
                            <span onClick={() => deleteItemFromCart(cartItem)}><i className='fa fa-trash'/>Remove Item</span>
                        </div>)
                    })
                }
                <h1>Summary</h1>
                <h3>Total Price: {cart.totalPrice}</h3>
                <h3>Total Quantity: {cart.totalQuantity}</h3>
                <h3>Total Items: {cart.totalItems}</h3>
                </>
                : <div style={{marginLeft: '30%'}}>
                    <div>No items yet</div>
                    <hr/>
                    <Link to='/'>
                        <button className='btn btn-warning my-3'>Continue Shopping</button>
                    </Link>
                </div>
            }
        </>
    )
}