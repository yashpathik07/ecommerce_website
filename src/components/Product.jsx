// eslint-disable-next-line react/prop-types
export default function Product({ image, title, description, price }) {
    return (
        <article className="product">
            <img src={image} alt="" />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">{price}</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button>Add To Cart</button>
                </p>
            </div>
        </article>
    );
}
