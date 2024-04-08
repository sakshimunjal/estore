import './_side-nav.scss';

export default function SideNav() {
    return(<>
        <div className='side-nav'>
            <div className='title'>
                <h3>Content</h3>
            </div>

            <div className='accordion'>
                <div className='accordion-item individual-category' data-bs-target='#accordian-heading-one' data-bs-toggle='collapse'>
                    <div className='accordion-header'>
                        <button className='accordion-button'>
                            <div className='category-title'>
                                <a href='#'>Women</a>
                            </div>
                        </button>
                    </div>
                    <div className='accordion-collapse collapse show' id='accordian-heading-one'>
                        <div className='accordian-body'>
                            <ul>
                                <li className='sub-items'><a href='#'>Tops & Tees</a></li>
                                <li className='sub-items'><a href='#'>Jeans & Trousers</a></li>
                                <li className='sub-items'><a href='#'>Shoes</a></li>
                                <li className='sub-items'><a href='#'>Accesories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}