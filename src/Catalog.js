function Catalog({catalogCosmetics}) {
    return(
        <div className="products">
            {catalogCosmetics.map((item => {
                const {id, image, name, price} = item;
                return (
                    <div key={id} className="product-card">
                        <img src={image} alt="item" width="250px" height="350px" />
                        <div className="product-info">
                            <h4> {name} </h4>
                            <h3> {price} ₽ </h3>
                            <button className="btn-cart">В корзину</button>
                        </div>
                    </div>
                    
                    
                )
            }))}

        </div>
    )
}

export default Catalog;