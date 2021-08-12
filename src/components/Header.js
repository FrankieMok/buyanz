import logo from "../images/buyANZlogo.webp"
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { ProductContext } from '../context'
import React, { useContext, useState } from "react";
import { FaLanguage } from 'react-icons/fa';
import i18next from 'i18next';

export const Header = () => {

    const { products } = useContext(ProductContext);
    const [isClick, setIsClick] = useState(false)


    const handleClick = () => {
        setIsClick(!isClick)
        if (isClick === false) { i18next.changeLanguage('chi') }
        else { i18next.changeLanguage('en') }
    }

    console.log('isClick: ' + isClick)


    return (
        <header className="header">
            <div className="header-container">
                <div className="header-header">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="a"
                            className="headerImg"
                        ></img>
                    </Link>
                    <SearchBar data={products} />
                    <button
                        type="button"
                        onClick={handleClick}
                    >
                        <FaLanguage size={60} className="navbar-icon" />{" "}
                    </button>
                </div>

            </div>
        </header>
    )
}
