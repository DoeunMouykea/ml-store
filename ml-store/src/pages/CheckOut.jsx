import React, { useState } from 'react';
import { useCart } from '../components/CartContext';  // Import the CartContext
import { PayPalButtons } from "@paypal/react-paypal-js";
import img2 from '../components/asset/icons/mastercard.jpg';
import img1 from '../components/asset/icons/paypal.jpg';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
    const { cartItems } = useCart();  // Access cartItems from CartContext
    const [shipping] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash_on_delivery');
    const navigate = useNavigate();

    // Calculate the subtotal based on cart items
    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    const total = subtotal + shipping;

    const handleSubmit = (e) => {
        if (e && e.preventDefault) e.preventDefault();

        const orderData = {
            first_name: firstName,
            last_name: lastName,
            address,
            country,
            city,
            zip,
            phone,
            payment_method: paymentMethod,
            subtotal,
            shipping,
            total,
            items: cartItems.map(item => ({
                product_id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }))
        };

        fetch('http://127.0.0.1:8000/api/orders/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(async res => {
                const text = await res.text();
                try {
                    const data = JSON.parse(text);
                    navigate('/order-confirmation', {
                        state: {
                            invoiceNo: data.order_id || Math.floor(Math.random() * 1000000),
                            invoiceDate: new Date().toLocaleDateString(),
                            dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
                            customer: {
                                name: `${firstName} ${lastName}`,
                                address,
                                country,
                                phone,
                                payment: paymentMethod
                            },
                            cart: orderData.items,
                            subtotal,
                            shipping,
                            total
                        }
                    });
                } catch (err) {
                    console.error("Failed to parse JSON:", err);
                    alert('Failed to place order: Invalid response from server.');
                }
            })
            .catch(err => {
                console.error("Order submission failed:", err);
                alert('Failed to place order. Please try again later.');
            });
    };

    return (
        <>
            <section className="page-add">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="page-breadcrumb">
                                <h2>Checkout<span>.</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src="img/add.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="cart-total-page spad">
                <div className="container">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-9">
                                <h3>Your Information</h3>
                                <div className="row">
                                    <div className="col-lg-2"><p className="in-name">Name*</p></div>
                                    <div className="col-lg-5">
                                        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-5">
                                        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2"><p className="in-name">Street Address*</p></div>
                                    <div className="col-lg-10">
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2"><p className="in-name">Country*</p></div>
                                    <div className="col-lg-10">
                                        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2"><p className="in-name">City*</p></div>
                                    <div className="col-lg-10">
                                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2"><p className="in-name">Post Code/ZIP*</p></div>
                                    <div className="col-lg-10">
                                        <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2"><p className="in-name">Phone*</p></div>
                                    <div className="col-lg-10">
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="order-table">
                                    <div className="cart-item">
                                        <span>Products</span>
                                        {cartItems.map((item, index) => (
                                            <div key={index} className="d-flex mb-2 align-items-center">
                                                <img
                                                    src={`${item.image || 'products/default.jpg'}`}
                                                    alt={item.name}
                                                    width="40"
                                                    className="mr-2"
                                                />
                                                <div>
                                                    <p className="product-name mb-0">
                                                        {item.name} x {item.quantity}
                                                    </p>
                                                    <p className="product-name mb-0">
                                                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="cart-item">
                                        <span>Subtotal</span>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="cart-item">
                                        <span>Shipping</span>
                                        <p>${shipping}</p>
                                    </div>
                                    <div className="cart-total">
                                        <span>Total</span>
                                        <p>${total.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="payment-method">
                                    <h3>Payment</h3>
                                    <ul>
                                        <li>
                                            <input type="radio" id="paypal" name="payment" value="paypal"
                                                checked={paymentMethod === 'paypal'}
                                                onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <label htmlFor="paypal">Paypal <img src={img1} alt="" /></label>
                                        </li>
                                        <li>
                                            <input type="radio" id="card" name="payment" value="card"
                                                checked={paymentMethod === 'card'}
                                                onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <label htmlFor="card">Credit / Debit card <img src={img2} alt="" /></label>
                                        </li>
                                        <li>
                                            <input type="radio" id="cod" name="payment" value="cash_on_delivery"
                                                checked={paymentMethod === 'cash_on_delivery'}
                                                onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <label htmlFor="cod">Pay when you get the package</label>
                                        </li>
                                    </ul>

                                    {paymentMethod === 'paypal' && (
                                        <div className="mt-3 ">
                                            <PayPalButtons
                                                style={{ layout: "vertical" }}
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [{
                                                            amount: {
                                                                value: total.toFixed(2)
                                                            }
                                                        }]
                                                    });
                                                }}
                                                onApprove={(data, actions) => {
                                                    return actions.order.capture().then((details) => {
                                                        alert("Transaction completed by " + details.payer.name.given_name);
                                                        handleSubmit({ preventDefault: () => { } });
                                                    });
                                                }}
                                            />
                                        </div>
                                    )}

                                    {paymentMethod !== 'paypal' && (
                                        <button type="submit" className="btn btn-primary mt-3">Place your order</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
