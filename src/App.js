import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './greet/Greet'
import NewWord from './new_word/NewWord'
import CheckWords from './check_words/CheckWords'

function App() {
  return (
    <div>
      <Greet name="Piyush"/>
      <div className="columns"> 
        <div className="column">
          <NewWord />
        </div>
        <div className="column">
          <CheckWords />
        </div>
      </div>
    </div>
  );
}

export default App;
