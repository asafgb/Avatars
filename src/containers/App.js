import React, { Component } from 'react';
import logo from  '../images/logo.svg'; //'./images/logo.svg';
import './App.css';
import MiniDrawer from '../components/Avatars_SideNavBar';
import BottomNavigationExampleSimple from '../components/Avatars_BottomNavigation'


class App extends Component {
  render() {
    return (
      <div className="App"  >

         <MiniDrawer title ="Choose Your Avatar"  />
             {/* <BottomNavigationExampleSimple/> */}
      </div>
    );
  }
}

export default App;
