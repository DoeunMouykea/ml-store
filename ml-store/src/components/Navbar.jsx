import React, { useEffect, useState } from 'react';
import icon1 from '../components/asset/icons/search.png';
import icon2 from '../components/asset/icons/man.png';
import icon3 from '../components/asset/icons/bag.png';
import icon4 from '../components/asset/icons/delivery.png';
import icon5 from '../components/asset/icons/voucher.png';
import icon6 from '../components/asset/icons/sales.png';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Navbar() {
    const { cartCount } = useCart();
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/logos');
                const data = await response.json();

                // Check if data is not empty and directly set the logo without using data[0]
                if (data && data.image) {
                    setLogo(`${data.image}`);
                } else {
                    setLogo('/images/fallback-logo.png'); // Fallback image path
                }
            } catch (error) {
                console.error("Error fetching logo:", error);
                setLogo('/images/fallback-logo.png'); // Fallback image path
            }
        };

        fetchLogo();
    }, []);

    if (!logo) {
        return <div className="loading-logo">Loading...</div>;
    }

    return (
        <>
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>

            <header className="header-section">
                <div className="container-fluid">
                    <div className="inner-header">
                        <div className="logo">
                            <Link to={"/"}>
                                <img src={logo} width={160} alt="ML Store Logo" />
                            </Link>
                        </div>
                        <div className="header-right ">
                            <img src={icon1} alt="" className="search-trigger" />
                            <img src={icon2} alt="" />
                            <Link to={"/cart"}>
                                <img src={icon3} alt="" />
                                <span>{cartCount}</span>
                            </Link>
                        </div>
                        <div className="user-access">
                            <Link to={"/"}>Register</Link>
                            <Link to={"/"} className="in">Sign in</Link>
                        </div>
                        <nav className="main-menu mobile-menu">
                            <ul>
                                <li><Link to={"/"} className="active" >Home</Link></li>
                                <li><Link to="/shop">Shop</Link>
                                    <ul className="sub-menu">
                                        <li><Link to={"/"}>Necklaces</Link></li>
                                        <li><Link to={"/"}>Earrings</Link></li>
                                        <li><Link to={"/"}>Bracelets</Link></li>
                                        <li><Link to={"/"}>Rings</Link></li>
                                    </ul>
                                </li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to={"/blog"}>Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="header-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="header-item">
                                <img src={icon4} alt="" />
                                <p>Free shipping on orders over $30 in USA</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-lg-center">
                            <div className="header-item">
                                <img src={icon5} alt="" />
                                <p>20% Student Discount</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-xl-right">
                            <div className="header-item">
                                <img src={icon6} alt="" />
                                <p>30% off on dresses. Use code: 30OFF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
