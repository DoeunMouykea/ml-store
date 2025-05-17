import React, { useEffect, useState } from 'react'

export default function About() {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/abouts")
            .then(res => res.json())
            .then(data => setAbout(data))
            .catch(err => console.error("Failed to fetch about info:", err));
    }, []);

    return (
        <section className="lookbok-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                        <div className="lookbok-left">
                            <div className="section-title">
                                <h2>{about?.title || "About Us"}</h2>
                            </div>
                            <p>{about?.content || "Loading about content..."}</p>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 mt-5">
                        <div className="lookbok-pic">
                            <img
                                src={about?.image ? `http://127.0.0.1:8000/storage/${about.image}` : ""}
                                alt="About"
                            />
                            <div className="pic-text">Store us</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
