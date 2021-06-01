import logo from './logo.svg';
import './App.css';
import CharacterApp from './component/CharacterApp';
import { Component } from 'react';

class App extends Component{
  render() {
    return (
      <div className="container">
        <CharacterApp/>
      </div>
    )
  }
}

export default App;
