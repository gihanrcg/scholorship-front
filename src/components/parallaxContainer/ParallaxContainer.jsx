import React, { Component } from 'react';
import img1 from './img/graduate2.jpg'
import './parallaxStyles.css'

class ParallaxContainer extends Component {
    render() {
        return (
            <div id="parallax-world-of-ugg">
                <section>
                    <div className="parallax-one" style={{backgroundImage: `url(${img1})`}}>
                        <h2>SOUTHERN CALIFORNIA</h2>
                        <p className="text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quam tenetur voluptatibus. Fugiat quaerat ducimus reprehenderit maxime obcaecati ipsum atque dolore vitae, laudantium magnam nostrum. Nihil nemo itaque maiores beatae.</p>
                    </div>
                </section>
            </div>

            
        );
    }
}

export default ParallaxContainer;