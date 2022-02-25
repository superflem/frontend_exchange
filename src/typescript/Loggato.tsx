import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //servono per andare in diverse pagine
import Home from './Home';
import NavbarLoggato from './NavbarLoggato';
import Soldi from './Soldi';
import Deposito from './Deposito';
import Withdraw from './Withdraw';
import Buy from './Buy';
import ListTransactions from './ListTransactions';
import axios from 'axios';
import {useEffect} from 'react';

const Loggato = () => {

        /*
        const url = "http://localhost:80/verifica";
        axios.post(url)
        .then(res => {
        
        alert(JSON.parse(res.data)["autenticato"]);
        /*
        if (JSON.parse(res.data)["autenticato"])
        {
            alert('ok');
        }
        else
        {
            alert('non va bene');
        }
        */
        
        
        //});

    useEffect(async () =>{
        const url = "http://localhost:80/verifica";
        const risposta = await axios.post(url);
        //alert(JSON.parse(risposta.data)["autenticato"]);
        if (risposta.data["autenticato"])
        {
            alert('ok');
        }
        else
        {
            alert('non va bene');
        }
    });

    

    return (
        <Router>
            <div className="loggato">
                <Switch>
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
export default Loggato;