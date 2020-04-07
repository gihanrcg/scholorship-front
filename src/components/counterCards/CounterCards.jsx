import React, { Component } from 'react';
import Card from './Card';

class CounterCards extends Component {
    render() {
        return (
            <div
                className="card-group"
                data-aos="zoom-in-down"
                id="counter-card-group"
            >

                <Card bg="bg-col1" col="txt-col4" title="UNIVERSITIES" count="15" icon="university" />
                <Card bg="bg-col2" col="txt-col4" title="SCHOOLS" count="103" icon="school" />
                <Card bg="bg-col1" col="txt-col4" title="USERS" count="667" icon="users" />
            </div>
        );
    }
}

export default CounterCards;