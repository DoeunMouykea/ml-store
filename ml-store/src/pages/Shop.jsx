import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    return (
        <section className="latest-products spad">
            <div className="container">
                <div className="product-filter">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2>Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="product-list">
                    {products.map((product, index) => (
                        <div key={index} className="col-lg-3 col-sm-6 mix all">
                            <div className="single-product-item">
                                <figure>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.image || 'img/products/default.jpg'} alt={product.name} style={{ height: '250px', objectFit: 'cover', width: '100%' }} />
                                    </Link>
                                    {product.status && <div className={`p-status ${product.status.toLowerCase()}`}>{product.status}</div>}
                                </figure>
                                <div className="product-text">
                                    <h6>{product.name}</h6>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
