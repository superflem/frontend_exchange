import { sha3_512 } from 'js-sha3';
import { useRef } from 'react';
import '../css/Form.css';

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
        const corpo = {email: email, password:password}; //creo l'oggetto json da inviare al server
        
        //INVIO I DATI
        e.preventDefault(); //evita di ricaricare la pagina  
        try
        {
            const richiesta = { //creo la richiesta http
                headers: {
                    "Content-Type": "text/plain",
                    "accept": "application/json"
                },
                
                body: JSON.stringify(corpo),
                method: "POST"
            }

            fetch (url, richiesta).then(data => {return data.text()}) // invio i dati al server
            .then(res => { //risposta dal server
                const ricevuto = JSON.parse(res);
                if (!ricevuto["isTuttoOk"]) //se c'è un errore lo comunico, altrimenti procedo
                {
                    alert(ricevuto["token"]);
                }
                else //se avviene con successo il login
                {
                    alert("autenticazione avvenuta");
                }
            });
        }catch (err)
        {
            alert(err);
        }
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