import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return (
        <section id="cart" className="cart py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-7">
                        <table className="table-shopping-cart">
                            <thead>
                                <tr className="table_head">
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length > 0 ? (
                                    cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img
                                                    src={item.image || 'img/product/default.jpg'}
                                                    width="50"
                                                    alt={item.name}
                                                />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    style={{ width: '50px' }}
                                                    value={item.quantity}
                                                    min="1"
                                                    onChange={(e) =>
                                                        updateQuantity(item.id, parseInt(e.target.value))
                                                    }
                                                />
                                            </td>
                                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">
                                            Your cart is empty
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                        <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                            <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>

                            <div className="flex-w flex-t bor12 p-b-13">
                                <div className="size-208">
                                    <span className="stext-110 cl2">Subtotal:</span>
                                </div>
                                <div className="size-209">
                                    <span className="mtext-110 cl2">${calculateSubtotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex-w flex-t p-t-27 p-b-33">
                                <div className="size-208">
                                    <span className="mtext-101 cl2">Total:</span>
                                </div>
                                <div className="size-209 p-t-1">
                                    <span className="mtext-110 cl2">${calculateSubtotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
