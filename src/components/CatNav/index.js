// import categorySlice from '../../Redux/Category';
import './_cat-nav.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../Redux/Category/actions';

export default function CatNav() {
    const catnavData = useSelector(state => state.categoryReducer.categories)
    console.log(catnavData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [])
    return (
        <>
            <div className='cat-nav-container container'>
                <ul>
                    <li className='list-items'>
                        <a href='/'>Home</a>
                    </li>
                    {
                        catnavData.map(navItem => {
                            console.log("navitem ", navItem)
                            if(navItem.parent_category_id === null)
                                return <li className='list-items'><a href='#'>{navItem.category}</a></li>;
                        })
                    }
                </ul>
            </div>
        </>
    )
}