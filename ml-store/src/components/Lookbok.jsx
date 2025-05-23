import React from 'react'
import img from '../components/asset/icons/lookbok.jpg'
import { Link } from 'react-router-dom'


export default function Lookbok() {
    return (
        <section class="lookbok-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 offset-lg-1">
                        <div class="lookbok-left">
                            <div class="section-title">
                                <h2>2019 <br />#lookbook</h2>
                            </div>
                            <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada
                                aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut commodo
                                lorem. In at nisi nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo
                                viverra scelerisque. Phasellus facilisis lobortis metus, sit amet viverra lectus finibus ac.
                                Aenean non felis dapibus, placerat libero auctor, ornare ante. Morbi quis ex eleifend,
                                sodales nulla vitae, scelerisque ante. Nunc id vulputate dui. Suspendisse consectetur rutrum
                                metus nec scelerisque. s</p>
                            <Link to={""} class="primary-btn look-btn">See More</Link>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="lookbok-pic">
                            <img src={img} alt="" />
                            <div class="pic-text">fashion</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
