import React, { Component } from 'react';
import StoryCard from './StoryCard';

import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'

class SuccessStories extends Component {
    render() {
        return (
            <div>
                <br/>
                <h1 className="text-center txt-col1"> Success Stories</h1>
                <hr size="60" className="bg-col1"/>
                <br/><br/>
                <div className="card-deck">
                    <StoryCard person="Gihan Siriwardhana" position="Software Engineer" img={image1} msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis porro cum nihil laboriosam nemo ipsam ut similique sed fuga autem beatae, laudantium esse non id iusto quasi, quas accusamus." />
                    <StoryCard person="Gihan Siriwardhana" position="Software Engineer" img={image2} msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis porro cum nihil laboriosam nemo ipsam ut similique sed fuga autem beatae, laudantium esse non id iusto quasi, quas accusamus."/>
                    <StoryCard person="Gihan Siriwardhana" position="Software Engineer" img={image3} msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis porro cum nihil laboriosam nemo ipsam ut similique sed fuga autem beatae, laudantium esse non id iusto quasi, quas accusamus."/>
                </div>
            </div>
        );
    }
}

export default SuccessStories;