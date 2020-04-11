import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CounterCards from '../../components/counterCards/CounterCards';
import VideoIntro from '../../components/videoIntro/VideoIntro';
import ParallaxContainer from '../../components/parallaxContainer/ParallaxContainer';
import SuccessStories from '../../components/successStories/SuccessStories';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <br />
                <div className="container">
                    <CounterCards />
                    <br />
                    <VideoIntro />
                    <br />
                    <ParallaxContainer />
                    <br />
                    <SuccessStories />
                    <br />
                </div>
            </div>
        );
    }
}

export default HomePage;