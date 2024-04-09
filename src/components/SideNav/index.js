import { useEffect, useState } from 'react';
import accordianSlice from '../../Redux/Accordian';
import './_side-nav.scss';
import {useSelector, useDispatch} from 'react-redux';
import { getCategories } from '../../Redux/Category/actions';
import { getSubcategory, filterByPrice } from '../../Redux/Product';

export default function SideNav() {

    const accordianData = useSelector(state => state.categoryReducer.categories);
    const productData = useSelector(state => state.productReducer);

    const [products, setProducts] = useState();
    const [minPriceLimit, setMinPriceLimit] = useState(0);
    const [maxPriceLimit, setMaxPriceLimit] = useState(15000);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    useEffect(() => {
        setProducts(productData.products);
    }, [productData.status])

    const filterData = (subCategory) => {
        const payload = {subCategory, products}
        dispatch(getSubcategory(payload))
    }

    const filterDataByPrice = () => {
        const payload = {products, minPrice: minPriceLimit, maxPrice: maxPriceLimit};
        dispatch(filterByPrice(payload));
    }
    
    const setPriceFilter = (e, type) => {
        if( type === 'min') {
            setMinPriceLimit(e.target.value)
        } else {
            setMaxPriceLimit(e.target.value);
        }
    }

    return(<>
        <div className='side-nav'>
            <div className='title'>
                <h3>Content</h3>
            </div>

            <div className='accordion my-3'>
                {
                    accordianData.map((data, key) => {
                        if(data.parent_category_id === null) {
                            const subCategories = accordianData.filter(acc => {
                                return acc.parent_category_id === data.id;
                            })
                            console.log("data ", data, subCategories)

                            return (<>
                                        <div className='accordion-item individual-category' data-bs-target={'#collapse'+key} data-bs-toggle='collapse'>
                                            <div className='accordion-header'>
                                                <button className='accordion-button'>
                                                    <div className='category-title'>
                                                        <a href='#'>{data.category}</a>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className='accordion-collapse collapse show' id={'collapse'+key}>
                                                <div className='accordian-body'>
                                                    <ul>
                                                        {
                                                            subCategories.map(item => <li className='sub-items'><a href='#' onClick={() => filterData(item)}>{item.category}</a></li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                            </>)
                        }
                    })
                }
            </div>

            <div className='price-filter-container'>
                <div className='section-title'>
                    <h3>Filter by Price</h3>
                    <label> Min: {minPriceLimit}</label>
                    <input className= "form-range" type="range" min={0} max={15000} step={1000} onChange={(e) => setPriceFilter(e, "min")}/>
                    <label> Max: {maxPriceLimit}</label>
                    <input className= "form-range" type="range" min={0} max={15000} step={1000} value={maxPriceLimit} onChange={(e) => setPriceFilter(e, "max")}/>
                    <button className='btn btn-outline-dark my-3' style={{width: "100%"}} onClick={filterDataByPrice}>Apply Filters</button>
                </div>
            </div>
        </div>
    </>)
}