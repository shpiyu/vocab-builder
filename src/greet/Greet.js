import React, { Component } from 'react';

class Greet extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>Hi <b>{this.props.name}</b>,</p>
            </div>
        )
    }
}

export default Greet
