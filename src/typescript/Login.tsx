import { sha3_512 } from 'js-sha3';
import { useRef } from 'react';
import '../css/Form.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Login = () => {
    //servono per inviare i dati nel form
    const emailInput = useRef();
    const passwordInput = useRef();

    const handleLoginForm = async (e) =>
    {
        e.preventDefault(); //evita di ricaricare la pagina
        const url = "http://localhost:80/login";
        const email = emailInput.current.value;
        let password = passwordInput.current.value;
        password = sha3_512(password); //cifro la password
        const corpo = {email: email, password: password, withCredentials: true}; //creo l'oggetto json da inviare al server
        
        /*
        //INVIO I DATI
        e.preventDefault(); //evita di ricaricare la pagina  
        try
        {
            const richiesta = { //creo la richiesta http
                headers: {
                    "Content-Type": "application/json",
                    "accept": "text/plain",
                    "Access-Control-Allow-Origin": "*", //serve per la comunicazione client server che stanno in posti diversi
                    "Access-Control-Allow-Methods": "POST",  
                },
                body: JSON.stringify(corpo),
                method: "POST"
            }

            
            const risposta = await fetch(url, richiesta);
            if (risposta.ok) // se è andato tutto ok
            {
                const stringa = await risposta.json(); //ricevo la risposta
                const ricevuto = JSON.parse(stringa); //traduco la stringa in oggetto json
                if (!ricevuto["isTuttoOk"]) //se c'è un errore lo comunico, altrimenti procedo
                {
                    alert(ricevuto["token"]);
                }
                else //se avviene con successo il login
                {
                    alert("autenticazione avvenuta");
                }
            }
            else // se c'è stato qualche errore nella comunicazione
            {
                alert("errore nella comunicazione con il server");
            }
        }catch (err)
        {
            alert(err);
        }
        */

        
        //AXIOS
        const risposta = await axios.post(url, corpo);
        const oggetto = JSON.parse(risposta.data);
        if (!oggetto["isTuttoOk"]) //se c'è un errore lo comunico, altrimenti procedo
        {
            alert(oggetto["token"]);
        }
        else //se avviene con successo il login
        {
            alert("autenticazione avvenuta");
            const link = window.location.href + 'home'; //rimando alla pagina principale di login
            window.location.replace(link);
            //axios.post("http://localhost:80/ciaoo", {email: email, password: password, withCredentials: true});
        }
        
        //controllo di aver ricevuto il cookie (inutile)
        //const risposta2 = await axios.get("http://localhost:80/ciaoo");
        //alert(risposta2.data);
    }

    return (
        <div className="divLogin">
            <h1>Login</h1>

            <form onSubmit = {handleLoginForm}>
                <input className='testo' type='text' ref={emailInput} id='email' name='email' placeholder='Email' required /> <br /> <br />
                <input className='testo' type='password' ref={passwordInput} id='password' name='password' placeholder='Password' required /> <br /> <br />
                {/*<input id='bottone' type='submit' onClick={handleLoginForm}/>*/}
                <button id='bottone' type='submit'> Invia</button>
            </form>
        </div> 
        


     );
}
 
export default Login;