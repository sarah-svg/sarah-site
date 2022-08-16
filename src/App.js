import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import Main from './Main/Main.js';
import ListProjects from './Projects/ListProjects.jsx';
import './App.scss';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.js';
function App() {
  return (
    <div className="back">
      <Router>
        <Header />
     
        <Switch> 
          <Route exact path='/'
            render={(routerProps) => <Main
              {...routerProps}/>} 
          />  
          <Route exact path='/page' component={ListProjects}/>
        </Switch>
      </Router> 

      <Footer/>
    </div>
  );
}

export default App;
//  <Footer/>