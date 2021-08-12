import { useState, useEffect } from "react"
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export const NavBar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
        //console.log(isOpen)
    }

    const navBarItems = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Recomment",
            url: "/recomment",
        },
        {
            title: "New Arrivial",
            url: "/new-arrivial",
        },
        {
            title: "On Sales",
            url: "on-sales",
        },
        {
            title: "Dashbord",
            url: "dashbord",
        },
    ];

    const navBarItemsCN = [
        {
            title: "主網頁",
            url: "/",
        },
        {
            title: "熱賣商品",
            url: "/recomment",
        },
        {
            title: "最新產品",
            url: "/new-arrivial",
        },
        {
            title: "特價出售",
            url: "on-sales",
        },
        {
            title: "討論區",
            url: "dashbord",
        },
    ];




    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-btn"
                        onClick={handleToggle}
                    >
                        <FaAlignRight className="navbar-icon" />{" "}
                    </button>
                </div>
                <ul
                    className={
                        isOpen ? "navbar-links show-navbar" : "navbar-links"
                    }
                >
                    {navBarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} onClick={handleToggle}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </div>
        </nav>

    )
}
