
import React, { useEffect, useState } from 'react'
import { baseUrlen, baseUrlcn } from './config';
import i18next from 'i18next';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    console.log('Check Lang: ' + i18next.languages)

    let baseUrl = baseUrlen;

    if (i18next.languages !== 'en') { let baseUrl = baseUrlcn }
    else { baseUrl = baseUrlen }

    console.log('Check Url: ' + baseUrl)

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };

        fetch(baseUrl, requestOptions)
            .then(async Response => Response.json())
            .then(data => setProducts(data.data.data))
        setLoading(false)

    }, [])



    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
            }}
        >
            {children}
        </ProductContext.Provider>
    )

}




