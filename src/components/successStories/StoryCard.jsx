import React, { Component } from 'react';

class StoryCard extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.img} alt="Card image cap" />
                <div className="card-body bg-col1 txt-col5">
                    <p className="card-text text-left"><i>"{this.props.msg}"</i></p>                 
                    <p className="card-text text-right"><b>-{this.props.person}</b> <br/>-{this.props.position}</p>
                   
                </div>
            </div>
        );
    }
}

export default StoryCard;