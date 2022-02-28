import '../css/Form.css';
import axios from 'axios';
const Buy = () => {

    const max = 32;

    const handleLoginForm = async (e) =>
    {
        e.preventDefault(); //evita di ricaricare la pagina
        const url = "http://localhost:80/buy";

        const quantita_spesa = e.target.valore.value;
        const valuta = e.target.valuta.value;

        const corpo = {
            quantita_spesa: quantita_spesa,
            valuta: valuta
        };

        const risposta = await axios.post(url, corpo);
        const oggetto = JSON.parse(risposta.data);

        if (oggetto["ridirezione"])
        {
            window.location.href = 'http://localhost:3000/';
        }
        else
        {
            alert (oggetto["messaggio"]);
            if (oggetto["isTuttoOk"])
            {
                window.location.href = 'http://localhost:3000/home';
            }
        }
    }

    return (
        <div className="divForm">
            <h1>Converti Valuta</h1>

            <form id = "form" onSubmit = {handleLoginForm}>
                <input className='testo' type='number' id='valore' name='valore' placeholder="Valore da convertire nell'altra valuta" min='1' max={max} step="0.01" required/><br /><br />
                
                <select id="valuta" name="valuta" form='form'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select> <br /> <br />
                <input id='bottoneInterno' type='submit'/>
            </form>

            
        </div> 
        


     );
}
 
export default Buy;