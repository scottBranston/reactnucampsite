import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/directorycomponent';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
              <Directory />
              <button onClick={() => alert('Button Clicked!')}>Click me</button>
          </div>
      );
  }
}
// the function App is the default export for this entire file
export default App;
