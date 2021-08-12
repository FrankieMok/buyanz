import React from 'react'
import loadingGif from '../images/loading.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4> Products data loading ...    </h4>
            <img src={loadingGif} alt="loading gif" />
        </div>
    )
}