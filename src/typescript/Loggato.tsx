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

    useEffect(async () =>{ //una volta caricata la pagina, controllo che il token sia valido e inserisco i valori dei soldi nella pagina html
        const url = "http://localhost:80/query";
        const risposta = await axios.post(url);
        const oggetto = JSON.parse(risposta.data);

        if (oggetto["ridirezione"])
        {
            window.location.href = 'http://localhost:3000/';
        }
        else
        {
            if (oggetto["isTuttoOk"]) 
            {
                document.getElementById('euro').innerHTML = oggetto["euro"]+" €";
                document.getElementById('dollari').innerHTML = oggetto["dollari"]+" $";
            }
            else
            {
                alert(oggetto["messaggio"]);
            }
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