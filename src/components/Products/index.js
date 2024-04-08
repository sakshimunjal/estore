import './_products.scss';

export default function Products() {
    const productsData = [
        {
            name: 'Coat',
            price: 2000,
            img: 'ladies-coat.jpg'
        },
        {
            name: 'Heels',
            price: 1000,
            img: 'heels.webp'
        },
        {
            name: 'Shoes',
            price: 5000,
            img: 'shoes.jpg'
        },
        {
            name: 'Top',
            price: 800,
            img: 'top.avif'
        },
        {
            name: 'Watch',
            price: 8000,
            img: 'watch.webp'
        },
    ]
    return (<div className='products-container'>
            {
                productsData.map(product => {
                    return (<>
                                <div className='mx-5 p-3 product-card'>
                                    <div className='product-image'>
                                        <img src={require(`../../assets/${product.img}`)}/>
                                    </div>
                                    <div className='product-info'>
                                        <h5><a href='#'>{product.name}</a></h5>
                                        <p className='product-price'>Rs. {product.price}</p>
                                        <div className='product-rating'>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                            <i className='fa fa-star'/>
                                        </div>
                                    </div>
                                </div>
                            </>
                    )
                })
            }
    </div>)
}