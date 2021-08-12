import React, { useContext } from "react";


import { ProductContext } from '../context'

import { FilterBand } from "../components/FilterBand";

export const Home = () => {

    const { products, loading } = useContext(ProductContext);


    return (
        <div>
            <FilterBand products={products} loading={loading} />
            {/* {loading ? <Loading /> : <Product products={products} />} */}
        </div>
    )
}
