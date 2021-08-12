import ProductList from './ProductList'





const Product = ({ filteredProducts }) => {

    //console.log('Product: ' + filteredProducts)

    return (
        <div className="product-container">
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Product;
