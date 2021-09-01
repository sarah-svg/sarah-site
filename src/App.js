import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import Main from './Main/Main.js';
import './App.scss';
function App() {
  return (
    <div className="App">
      <div className="shine">
        <Router>
          <Switch> 
            <Route exact path='/'
              render={(routerProps) => <Main
                {...routerProps}/>} 
            /> 
          </Switch>
        </Router> 
      </div>
    </div>
  );
}

export default App;
