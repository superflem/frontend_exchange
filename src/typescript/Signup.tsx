import '../css/Form.css'

const Signup = () => {
    return ( 
        <div className="divSignup">
            <h1>Signup</h1>
            <form>
                <input className='testo' type='text' id='nome' name='nome' placeholder='Nome' required /> <br /><br />
                <input className='testo' type='text' id='cognome' name='cognome' placeholder='Cognome' required /> <br /><br />
                <input className='testo' type='email' id='email' name='email' placeholder='Email' required /><br /><br />
                <input className='testo' type='password' id='password' name='password' minLength={Number('8')} placeholder='Password' required /> <br /><br />
                <input className='testo' type='password' id='password2' name='password2' minLength={Number('8')} placeholder='Reinserisci la password' required /> <br /><br />
                <input className='testo' type='text' id='iban' name='iban' maxLength={Number('27')} minLength={Number('27')} placeholder='IBAN (senza spazi)' required /> <br /><br />

                <input id='bottone' type='submit' />
            </form>
        </div>
    );
}
 
export default Signup;