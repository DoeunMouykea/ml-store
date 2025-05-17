import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch product details by ID
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error('Failed to fetch product:', err));
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product.id, quantity, product); // Add the product to the cart
            navigate('/cart'); // Navigate to the cart page
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <section className="product-page">
            <div className="container">
                <div className="product-control">
                    <button onClick={() => window.history.back()}>Back to Shop</button>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-img">
                            <img src={product.image || 'img/product/default.jpg'} alt={product.name} />
                            {product.status && <div className="p-status">{product.status}</div>}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-content">
                            <h2>{product.name}</h2>
                            <h5>${product.price}</h5>
                            <p>{product.description}</p>
                            <input
                                type="number"
                                value={quantity}
                                min={1}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <button onClick={handleAddToCart} className="primary-btn pc-btn">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
