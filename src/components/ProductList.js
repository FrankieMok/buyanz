import { imgUrl } from '../config';


const ProductList = ({ products }) => {


    const items = products.map((item) => {
        return (
            <div className="product-card" key={item.productId}>
                <img className="product-card-img" referrerPolicy="no-referrer" src={imgUrl.concat(item.image)} alt={item.shippingName} />
                <div className="product-card-title">{item.name}</div>
                <p>$ {item.price}</p>
            </div>
        );
    });

    return <div className="product-card-container">{items}</div>;

};

export default ProductList;
