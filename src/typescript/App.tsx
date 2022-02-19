import '../css/App.css';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import Home from './Home';
import NavbarLoggato from './NavbarLoggato';
import Soldi from './Soldi';
import Deposito from './Deposito';
import Withdraw from './Withdraw';
import Buy from './Buy';
import ListTransactions from './ListTransactions';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //servono per andare in diverse pagine

function App() {
  
  return (
    <Router>
      <div className="App">
        

        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Navbar />
            <Signup />
          </Route>

          <Route exact path='/home'>
            <NavbarLoggato />
            <Soldi />
            <Home />
          </Route>

          <Route exact path='/deposit'>
            <NavbarLoggato />
            <Soldi />
            <Deposito />
          </Route>

          <Route exact path='/withdraw'>
            <NavbarLoggato />
            <Soldi />
            <Withdraw />
          </Route>

          <Route exact path='/buy'>
            <NavbarLoggato />
            <Soldi />
            <Buy />
          </Route>

          <Route exact path='/listTransactions'>
            <NavbarLoggato />
            <Soldi />
            <ListTransactions />
          </Route>

        </Switch>
      
      </div>
    </Router>
      
  );
}

export default App;
