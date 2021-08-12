import Title from "./Title"
import React, { useState, useEffect } from "react";
import Product from "./Product";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";

export const FilterBand = ({ products, loading }) => {

    const { t } = useTranslation();
    const [product, setProduct] = useState({
        pdBand: 'All Bands',
        pdStock: 'All Stocks',
    });

    let tempProducts = [...products]
    //    console.log(tempProducts)
    const [filtedProducts, setFiltedProduct] = useState(tempProducts);

    //console.log(filtedProducts)


    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    }


    // Filter for Band list

    const bandLists = products.map(item => {
        return {
            band: item.brandName
        }
    });

    let uniqueBand = getUnique(bandLists, 'band');

    uniqueBand = ['All Bands', ...uniqueBand];

    uniqueBand = uniqueBand.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });


    // Filter for Stock lIst

    const stockLists = products.map(item => {
        return {
            stockLocation: item.stockLocation
        }
    });

    let uniqueStock = getUnique(stockLists, 'stockLocation');

    uniqueStock = ['All Stocks', ...uniqueStock];

    uniqueStock = uniqueStock.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    const filterProducts = () => {

        if (product.pdBand !== "All Bands") {
            tempProducts = tempProducts.filter(act => act.brandName === product.pdBand)
            setFiltedProduct(tempProducts)
        }

    }


    useEffect(() => {
        setFiltedProduct(tempProducts)
        filterProducts()
    }, [product.pdBand, product.pdStock])

    //console.log('pdBand: ' + product.pdBand)

    return (
        <>
            <section className="filter-container">
                <Title title={t("FilterProducts.1")} />
                <form className="filter-form">
                    {/* select Band */}
                    <div className="form-group">
                        <label htmlFor="uniqueBand">{t('BrandsTypes.1')}</label>
                        <select name="uniqueBand" id="uniqueBand" value={product.pdBand} className="form-control"
                            onChangeCapture={(e) =>
                                setProduct({ ...product, pdBand: e.target.value })
                            }>
                            {uniqueBand}
                        </select>
                    </div>
                    {/* end select Band */}

                    {/* select Stock */}
                    <div className="form-group">
                        <label htmlFor="uniqueStock">{t('StockLocation.1')}</label>
                        <select name="uniqueStock" id="uniqueStock" value={product.pdStock} className="form-control"
                            onChangeCapture={(e) =>
                                setProduct({ ...product, pdStock: e.target.value })
                            }>
                            {uniqueStock}
                        </select>
                    </div>
                    {/* end select Band */}

                </form>
            </section>
            {loading ? <Loading /> : <Product filteredProducts={filtedProducts} />}

        </>
    )

}

