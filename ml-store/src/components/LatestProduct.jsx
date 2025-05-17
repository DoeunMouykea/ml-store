import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LatestProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
            .then(res => res.json())
            .then(data => {
                const latest = data.slice(5, 9).reverse(); // last 4 products, newest first
                setProducts(latest);
            })
            .catch(err => console.error('Failed to load products', err));
    }, []);

    return (
        <section className="latest-products spad">
            <div className="container">
                <div className="product-filter">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2>Latest Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="product-list">
                    {products.map((product, index) => (
                        <div className="col-lg-3 col-sm-6 " key={index}>
                            <div className="single-product-item">
                                <figure>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.image} alt={product.name} style={{ height: '250px', objectFit: 'cover', width: '100%' }} />
                                    </Link>
                                    <div className="p-status">{product.category}</div>
                                </figure>
                                <div className="product-text">
                                    <h6>{product.name}</h6>
                                    <p>${parseFloat(product.price).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
