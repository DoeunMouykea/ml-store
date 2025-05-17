import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import CheckOut from "./pages/CheckOut";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import OrderConfirmation from "./components/OrderConfirmation";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
    return (
        <PayPalScriptProvider>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        {/* <Route path='/payment' element={<PaymentPage />}/> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* <Route path='/register' element={<Register />}/> */}
                        {/* <Route path='/service' element={<Services />}/> */}
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/checkout" element={<CheckOut />} />
                        <Route path="/cart" element={<Cart />} />
                        {/* <Route path='/profile' element={<Profile />}/> */}
                        <Route
                            path="/product/:id"
                            element={<ProductDetail />}
                        />
                        <Route
                            path="/order-confirmation"
                            element={<OrderConfirmation />}
                        />
                    </Route>
                </Routes>
            </CartProvider>
        </PayPalScriptProvider>
    );
}
export default App;
function MainLayout() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
