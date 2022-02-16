import { sha3_512 } from 'js-sha3';
import { useRef } from 'react';
import '../css/Form.css';

const Login = () => {

    const emailInput = useRef();
    const passwordInput = useRef();

    function handleLoginForm()
    {
        const email = emailInput.current.value;
        var password = passwordInput.current.value;

        password = sha3_512(password); //trasforma la password in un hash di 128 caratteri
        document.getElementById('password')['value'] = password; 
    }

    return (
        <div className="divLogin">
            <h1>Login</h1>

            <form method='post' action='http://localhost:80/login'>
                <input className='testo' type='text' ref={emailInput} id='email' name='email' placeholder='Email' required /> <br /> <br />
                <input className='testo' type='password' ref={passwordInput} id='password' name='password' placeholder='Password' required /> <br /> <br />
                <input id='bottone' type='submit' onClick = {e => handleLoginForm()}/>
            </form>
        </div> 
        


     );
}
 
export default Login;