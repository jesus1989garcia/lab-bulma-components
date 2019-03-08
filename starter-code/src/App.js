import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import FormField from './components/FormField';

class App extends Component {

  
  render() {
    return (
      <div>
        <NavBar />
     
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      
     
      </div>
     
      
     
    )
  }
}

export default App;





