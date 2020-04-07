import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className={`animated fadeInDown card-body ${this.props.bg}`}
                
                 >
                    <h3 className="text-center text-dark card-title">{this.props.title}</h3>
                    <center>
                        <p className="card-text">
                            <i className={`fas fa-${this.props.icon} fa-5x`}></i>
                        </p>
                    </center>
                    <center>
                        <h1 className={`card-text ${this.props.col}`} id="counter_num">
                            {this.props.count}
                        </h1>
                    </center>
                </div>
            </div>
        );
    }
}

export default Card;