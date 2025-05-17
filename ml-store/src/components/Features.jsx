import React from 'react'
import icon1 from '../components/asset/icons/f-delivery.png'
import icon2 from '../components/asset/icons/coin.png'
import icon3 from '../components/asset/icons/chat.png'
import show3 from '../components/asset/icons/slideshow4.jpeg'
import show2 from '../components/asset/icons/slideshow3.jpg'
import show1 from '../components/asset/icons/slideshow1.jpg'
import { Link } from 'react-router-dom'

export default function Features() {
    return (
        <section className="features-section spad">
            <div className="features-ads">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-features-ads first">
                                <img src={icon1} alt="" />
                                <h4>Free shipping</h4>
                                <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal
                                    esuada aliquet libero viverra cursus. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-features-ads second">
                                <img src={icon2} alt="" />
                                <h4>100% Money back </h4>
                                <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada
                                    aliquet libero viverra cursus. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-features-ads">
                                <img src={icon3} alt="" />
                                <h4>Online support 24/7</h4>
                                <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada
                                    aliquet libero viverra cursus. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features Box --> */}
            <div className="features-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12 mt-4">
                                    <div className="single-box-item first-box">
                                        <img src={show1} alt="" />
                                        <div className="box-text">
                                            <span className="trend-year">2019 Party</span>
                                            <h2>Jewelry</h2>
                                            <span className="trend-alert">Trend Allert</span>
                                            <Link to={""} className="primary-btn">See More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-box-item second-box">
                                        <img src={show3} alt="" />
                                        <div className="box-text">
                                            <span className="trend-year">2019 Trend</span>
                                            <h2>Watch</h2>
                                            <span className="trend-alert">Bold & Black</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-box-item large-box">
                                <img src={show2} alt="" />
                                <div className="box-text">
                                    <span className="trend-year">2019 Party</span>
                                    <h2>Collection</h2>
                                    <div className="trend-alert">Trend Allert</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
