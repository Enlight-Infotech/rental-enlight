import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState ([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5500/api/admin/categories/get");
            console.log("categories received", response.data);

            const products = response.data.resultData; // adjust according to your API response structure
            setProductData(products);
            localStorage.setItem("productData", JSON.stringify(products));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Call it in useEffect
    useEffect(() => {
    fetchProducts();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">

            {/* Logo */}
            <NavLink className="navbar-brand" to="/">
                <img
                    className="d-inline-block align-top"
                    alt="Logo"
                    width="50"
                    height="50"
                    src="/en-logo.webp"
                />
            </NavLink>

            {/* Mobile Toggle Button */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About Us
                        </NavLink>
                    </li>

                    {/* Dropdown */}
                    <li className="nav-item dropdown">
                        <div
                            className="nav-link dropdown-toggle"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                        >
                            Categories
                        </div>

                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {
                                productData.map((item) => {
                                    return <li key={item.id}>
                                        <NavLink className="dropdown-item"
                                            to={`/categories/${item.id}`}
                                            end>
                                            {item.categoryName}
                                        </NavLink>
                                    </li>
                                })
                            }
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact Us
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">
                            Products
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* Button Right Side */}
            <form className="d-flex m-2">
                <button onClick={() => {
                    navigate('/contact')
                }} className="btn btn-outline-success" type="submit">
                    Schedule a Visit
                </button>
            </form>

        </nav>
    );
};

export default NavBar;
