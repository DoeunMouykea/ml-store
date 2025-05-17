import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

window.$ = window.jQuery = $;

export default function Slider() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        // Fetch slideshow data from API
        fetch('http://127.0.0.1:8000/api/slideshows')
            .then(res => res.json())
            .then(data => {
                setSlides(data);
            })
            .catch(err => console.error('Error loading slides:', err));
    }, []);

    useEffect(() => {
        if (slides.length > 0) {
            // Initialize Owl Carousel
            import('owl.carousel').then(() => {
                $('.owl-carousel').owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    nav: true,
                    dots: true
                });
            });
        }
    }, [slides]);

    return (
        <section className="hero-slider">
            <div className="hero-items owl-carousel">
                {slides.map((slide, id) => (
                    <div
                        key={id}
                        className="single-slider-item set-bg"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>{slide.title}</h1>
                                    <h2>{slide.description}</h2>
                                    <Link to={slide.link || "#"} className="primary-btn">See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
