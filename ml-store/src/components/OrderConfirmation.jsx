import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

export default function OrderConfirmation() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const {
        customer,
        cart,
        subtotal,
        shipping,
        total,
        invoiceNo,
        invoiceDate,
        dueDate
    } = state || {};

    const handleReturnToStore = () => {
        clearCart(); // ✅ Just clear local cart
        navigate('/'); // ✅ Then go home
    };

    return (
        <div className="container invoice-container">
            <div className="invoice-header text-center"><h3>INVOICE</h3></div>
            <div className="invoice-details">
                <p><strong>Invoice No:</strong> {invoiceNo}</p>
                <p><strong>Invoice Date:</strong> {invoiceDate}</p>
                <p><strong>Due Date:</strong> {dueDate}</p>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 mb-5">
                    <h4 className="mb-2"><strong>FROM COMPANY</strong></h4>
                    <p>
                        NAME : ML Store <br />
                        ADDRESS : Phnom Penh <br />
                        COUNTRY : Cambodia <br />
                        CONTACT US : 012345678 <br />
                        EMAIL : info@eshop.com
                    </p>
                </div>
                <div className="col-md-6">
                    <h4 className="mb-2"><strong>TO CUSTOMER</strong></h4>
                    <p>
                        NAME : {customer?.name} <br />
                        ADDRESS : {customer?.address} <br />
                        COUNTRY : {customer?.country} <br />
                        PHONE : {customer?.phone} <br />
                        PAYMENT BY : {customer?.payment}
                    </p>
                </div>
            </div>
            <table className="table invoice-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${parseFloat(item.price).toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>${(item.quantity * parseFloat(item.price)).toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" className="text-end"><strong>Subtotal : </strong></td>
                        <td>${subtotal?.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="text-end"><strong>Shipping : </strong></td>
                        <td>${shipping?.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="text-end"><strong>Total : </strong></td>
                        <td>${total?.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center mt-4">
                <p><strong>Thank you for your purchase!</strong></p>
                <button className="btn btn-primary" onClick={handleReturnToStore}>
                    Return to Store
                </button>
            </div>
        </div>
    );
}
