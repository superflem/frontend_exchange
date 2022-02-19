import '../css/Form.css';
const Deposito = () => {

    const max = 32;

    return (
        <div className="divForm">
            <h1>Carica Il Tuo Saldo</h1>

            <form id = "form">
                <input className='testo' type='number' id='valore' name='valore' placeholder='Valore da caricare' min='1' max={max} step="0.01" required /> <br /> <br />
                
                <select id="valuta" name="valuta" form='form'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select> <br /> <br />
                <input id='bottoneInterno' type='submit'/>
            </form>

            
        </div> 
        


     );
}
 
export default Deposito;