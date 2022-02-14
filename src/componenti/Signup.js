const Signup = () => {
    return ( 
        <div className="divSignup">
            <h1>Signup</h1>
            <form>
                <label for='nome'> Inserisci il tuo nome</label> <input type='text' id='nome' name='nome' required /> <br /><br />
                <label for='cognome'> Inserisci il tuo cognome</label> <input type='text' id='cognome' name='cognome' required /> <br /><br />
                <label for='email'> Inserisci la tua email</label> <input type='email' id='email' name='email' required /><br /><br />
                <label for='password'> Inserisci la tua password</label> <input type='password' id='password' name='password' minlength='8' required /> <br /><br />
                <label for='password2'> Reinserisci la tua password</label> <input type='password' id='password2' name='password2' minlength='8' required /> <br /><br />
                <label for='iban'> Inserisci il tuo IBAN</label> <input type='text' id='iban' name='iban' maxlength='27' minlength='27' required /> <br /><br />

                <input type='submit' />
            </form>
        </div>
    );
}
 
export default Signup;