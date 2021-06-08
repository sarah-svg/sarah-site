import React, { Component } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
// import Background from '../Background/Background';
// import About from '../About/About';

class App extends Component {

  render() {
    return (
      <div className="App">
         
        <Router>
   
          <main> 

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
    
        </Router>
      </div>
    );
  }

}

export default App;
