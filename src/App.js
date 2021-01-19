import react from 'react'
import './App.css'
import Home from './Home'
import User from './User' 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="nav">
        <ul>
          <li>
            <Link to="/Home"><a>Home</a></Link>
          </li>
          <li>
            <Link to="/User"><a>User</a></Link>
          </li>
          
        </ul>

        <hr />

       
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/User">
            <User />
          </Route>
         
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
