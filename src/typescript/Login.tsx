import { sha3_512 } from 'js-sha3';
import { useRef } from 'react';
import '../css/Form.css';

const Login = () => {

    const emailInput = useRef();
    const passwordInput = useRef();

    const handleLoginForm = async (e) =>
    {
        e.preventDefault(); //evita di ricaricare la pagina
        const url = "http://localhost:80/login";
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        const corpo = {email: email, password:password};
         //FETCH
        e.preventDefault(); //evita di ricaricare la pagina
        

        try
        {
            const richiesta = {
                
                headers: {
                    "Content-Type": "text/plain",
                    "accept": "application/json"
                },
                
                body: JSON.stringify(corpo),
                //mode: ,
                method: "POST"
            }

            fetch (url, richiesta).then(data => {return data.text()})
            .then(res => {console.log(res)})
            .then(error => {alert("errore: "+error)});
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