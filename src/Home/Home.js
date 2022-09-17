import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import ListProjects from '../Projects/ListProjects.jsx';
import '../App.scss';
import Main from '../Main/Main.js';


  
function Home() {
  return ( 
    <div className="body">
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
  );
}
  
export default Home;