import React, { Component } from 'react'

class NewWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          word: "",
          meaning: ""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
          // todo: save word meaning to DB
          console.log(this.state.word + " " + this.state.meaning)
          this.setState({
              word: '',
              meaning: ''
          })
          event.preventDefault();
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value    
        });
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter the new word that you've learned: <br />
              <input
                name="word"            
                type="text"
                value={this.state.word}
                className="input"
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              and it's meaning: <br />
              <textarea
                name="meaning" 
                className="textarea"
                value={this.state.meaning}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <input type="submit" value="submit" className="button is-primary"/>
          </form>
        );
      }
}

export default NewWord
