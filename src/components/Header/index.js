import './_header.scss';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
    const dropdown = ['Women', 'Men', 'Kids'];
    const cartItems = useSelector(state => state.cartReducer.totalQuantity);
    console.log("acrt items ", cartItems)
    return(<>
        <div className="header bg-dark">
            <div className="row top-nav-row">
                <div className="brand my-1">
                    <h1>eStore</h1>
                </div>
                <div className="input-container p-0 my-4 w-50 h-25 bg-white">
                    <div className="dropdown m-0 p-0">
                        <select className="select-btn p-0 m-0 w-100">
                            {
                                dropdown.map(category => {
                                    return <option value={category}>{category}</option>
                                })
                            }
                        </select>
                    </div> 
                    <input className="form-control" placeholder="Search..."/>
                    <button><i className="fa fa-search"/></button> {/* fa is font awesome -cdn in index.html */}
                </div>
                <div className="login-container p-0">
                    <i className="fa fa-user-circle user-icon"/>
                    <h5><a href="#">Login</a> / <a href="#">Register</a></h5>
                </div>
                <div className="cart-wishlist">
                    <ul className="p-0">
                        <li className="list-icon"><i className="fa fa-heart"/></li>
                        <Link to='/cart'>
                            <li className="list-icon">
                                <i className="fa fa-shopping-cart"/>
                                {cartItems > 0 ? 
                                    <div id="cart-item-count">
                                        <p>{cartItems}</p>
                                    </div> 
                                : <></>}
                            </li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    </>)
}