const Login = () => {
    return (
        <div className="divLogin">
            <h1>Login</h1>

            <form>
                <label for='email'> Inserisci la tua email</label>   <input type='text' id='email' name='email' required /> <br /> <br />
                <label for='password'> Inserisci la tua password</label> <input type='password' id='password' name='password' required /> <br /> <br />
                <input type='submit' />
            </form>
        </div> 
        


     );
}
 
export default Login;