//import logo from './logo.svg';
import '../css/App.css';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //servono per andare in diverse pagine

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Signup />
          </Route>

        </Switch>
      
      </div>
    </Router>
      
  );
  
/*
  return 
  (
    <div className="App">
      <h1> ciao</h1>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  );
  */
}

export default App;
