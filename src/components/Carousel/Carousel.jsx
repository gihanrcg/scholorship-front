import React, { Component } from 'react';
import './carousel.css'

import img1 from './img/architect-at-the-construction.jpg'
import img2 from './img/architects-and-worker.jpg'
import img3 from './img/young-college-students.jpg'

class Carousel extends Component {

    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="First slide" style={{ height: '400px' }} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>lorem</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab alias error ipsa vitae dicta eaque magni excepturi quos natus non asperiores cupiditate debitis pariatur, officiis doloribus. Itaque blanditiis dolore voluptates.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide" style={{ height: '400px' }} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" style={{ height: '400px' }} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;