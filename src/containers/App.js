import React, { Component } from 'react';
import logo from  '../images/logo.svg'; //'./images/logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonAppBar  from '../components/Avatars_TopNavBar';
import MiniDrawer from '../components/Avatars_SideNavBar';



class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MuiThemeProvider>
          <RaisedButtonExampleSimple />
        </MuiThemeProvider>
      </div>    */
      <div className="App"  >

         <MiniDrawer title ="Choose Your Avatar"  />
         
           {/* <ButtonAppBar title ="Choose Your Avatar" />  */}
           
      </div>
    );
  }
}

export default App;
