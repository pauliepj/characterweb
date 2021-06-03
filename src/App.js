import logo from './logo.svg';
import './App.css';
import CharacterApp from './component/CharacterApp';
import { Component } from 'react';
import RegistrationComponent from './component/RegistrationComponent';

class App extends Component{
  render() {
    return (
      <div className="container">
        <CharacterApp/>
        <RegistrationComponent/>
      </div>
    )
  }
}

export default App;
