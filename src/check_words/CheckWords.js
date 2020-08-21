import React, { Component } from 'react'

class CheckWords extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentWord: 'test word'
        }
    }
    
    render() {
        const word_card = (
            <div className="card">
                <div className="card-content has-text-centered">
                     <p className="title">
                         {this.state.currentWord}
                     </p>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                        Yes
                    </p>
                    <p className="card-footer-item">
                        No
                    </p>
                </footer>
            </div>
        )
        return (
            <div>
                Do you remember the meaning of:
                {word_card}
            </div>
        )
    }
}

export default CheckWords