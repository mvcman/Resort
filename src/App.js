import React from 'react';
import  './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import SingleRoom from './components/SingleRoom.js';
import Rooms from './components/Rooms.js';
import ErrorPage from './components/ErrorPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

//import Login from './components/Login.js';
//import { store } from './Redux/Store.js';
//import { Provider } from 'react-redux';
function App() {
  return (
    //<Provider store={store}>
    <div>
      <Navbar />
      <Switch>
        {/*<Route exact path="/login" component={Login} />*/}
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom }/>
        <Route component={ErrorPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
