import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
///import Footer from './Footer/Footer.jsx';
import Main from './Main/Main.js';
import ListProjects from './Projects/ListProjects.jsx';
import './App.scss';
function App() {
  return (
    <div className="back">
      <div >
        <Router>
          <Switch> 
            <Route exact path='/'
              render={(routerProps) => <Main
                {...routerProps}/>} 
            />  
            <Route exact path='/page' component={ListProjects}/>
          </Switch>
        </Router> 
      </div>
     
    </div>
  );
}

export default App;
//  <Footer/>