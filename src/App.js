import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import Main from './Main/Main.js';
// import './App.scss';className="App"className="shine"

import Page from './Projects/Page.js';
function App() {
  return (
    <div >
      <div >
        <Router>
          <Switch> 
            <Route exact path='/'
              render={(routerProps) => <Main
                {...routerProps}/>} 
            />  
           
            <Route exact path='/page' component={Page}/>
          </Switch>
        </Router> 
      </div>
    </div>
  );
}

export default App;
