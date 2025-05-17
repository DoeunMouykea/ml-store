import React, { useState } from 'react'
// import banner from '../components/asset/icons/slideshow1.jpg'

export default function Contact() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name: `${formData.first_name} ${formData.last_name}`,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        }

        try {
            const res = await fetch('http://127.0.0.1:8000/api/contacts/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            if (res.ok) {
                setStatus('✅ Message sent successfully!')
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            } else {
                setStatus('❌ Failed to send message.')
            }
        } catch (error) {
            console.error(error)
            setStatus('❌ Error occurred while sending message.')
        }
    }

    return (
        <>
            <section className="page-add">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-12">
                            <img src={banner} alt="Contact Banner" />
                        </div> */}
                        <div className="col-lg-4">
                            <div className="page-breadcrumb">
                                <h2>Contact us<span>.</span></h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            name="first_name"
                                            placeholder="First Name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            name="last_name"
                                            placeholder="Last Name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-lg-12 text-right">
                                        <button type="submit">Send message</button>
                                        {status && <p className="mt-2">{status}</p>}
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-3 offset-lg-1">
                            <div className="contact-widget">
                                <div className="cw-item">
                                    <h5>Location</h5>
                                    <ul>
                                        <li>Russian Federation Blvd (110),</li>
                                        <li>Phnom Penh 120404</li>
                                    </ul>
                                </div>
                                <div className="cw-item">
                                    <h5>Phone</h5>
                                    <ul>
                                        <li>+855 85378162</li>
                                        <li>+855 979051443</li>
                                    </ul>
                                </div>
                                <div className="cw-item">
                                    <h5>E-mail</h5>
                                    <ul>
                                        <li>contact@mlstore.com</li>
                                        <li>www.mlstore.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map mt-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7652231711418!2d104.8881667747755!3d11.568681244081688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1744443183423!5m2!1sen!2skh"
                                    title="Google Maps Location"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
