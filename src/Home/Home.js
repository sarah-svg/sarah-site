import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import ListProjects from '../Projects/ListProjects.jsx';
import '../App.scss';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../store.js';


  
function Home() {
  const { toggle } = useContext(ThemeContext);
  return ( 
    <div className={toggle ? 'easy' : 'light'}>
      <Router>
      
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
  
export default Home;