import '../css/Form.css';

const Login = () => {
    return (
        <div className="divLogin">
            <h1>Login</h1>

            <form>
                <input class='testo' type='text' id='email' name='email' placeholder='Email' required /> <br /> <br />
                <input class='testo' type='password' id='password' name='password' placeholder='Password' required /> <br /> <br />
                <input id='bottone' type='submit' />
            </form>
        </div> 
        


     );
}
 
export default Login;