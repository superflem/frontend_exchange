import '../css/Form.css';
import '../css/ListTransactions.css';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
const parse = require('html-react-parser');
const ListTransactions = () => {

    //const [tabella, setTabella] = useState('<tr><td></td><td></td><td></td></tr>');
    const [tabella, setTabella] = useState('');
    const url = "http://localhost:80/listTransactions";

    useEffect(async () =>{ //una volta caricata la pagina, controllo che il token sia valido e inserisco i valori dei soldi nella pagina html
        
        const risposta = await axios.post(url);
        const oggetto = JSON.parse(risposta.data);

        if (oggetto["ridirezione"])
        {
            alert('Sessione scaduta');
            window.location.href = 'http://localhost:3000/';
        }
        else
        {
            if (oggetto["isTuttoOk"]) 
            {
                if (oggetto["listaTransizioni"] != '[]')
                {
                    creaTabella(oggetto["listaTransizioni"]); //creo la tabella 
                }
            }
            else
            {
                alert(oggetto["messaggio"]);
            }
        }
    });

    function creaTabella (oggetto:string)
    {
        const lista = JSON.parse(oggetto);
        let nuovaTabella = '';
        let valutaComprata: string;
        let valutaSpesa: string;
        for (let i = 0; i < lista.length; i++)
        {
            if (i%2 == 1) //guardo se devo fare lo sfondo bianco o grigio
            {
                nuovaTabella = nuovaTabella + '<tr>';
            }
            else
            {
                nuovaTabella = nuovaTabella + '<tr className = "dispari">';
            }

            if (lista[i]["valuta_comprata"] == 'USD') //setto le valute
            {
                valutaComprata = '$';
                valutaSpesa = '€';
            }
            else
            {
                valutaComprata = '€';
                valutaSpesa = '$';
            }

            nuovaTabella = nuovaTabella + '<td>' + lista[i]["quantita_spesa"].toFixed(2) + " " + valutaSpesa + "</td>"; //spesa
            nuovaTabella = nuovaTabella + '<td>' + lista[i]["quantita_comprata"].toFixed(2) + " " + valutaComprata + "</td>"; //comprata
            nuovaTabella = nuovaTabella + '<td>' + giraData(lista[i]["data"]) + "</td>"; //data
            nuovaTabella = nuovaTabella + '</tr>';
        }
        setTabella(nuovaTabella);
    }

    function giraData(data:string)
    {   //trasformo da anno mese giorno a giorno mese anno
        return data.slice(8, 10)+'-'+data.slice(5, 7)+'-'+data.slice(0, 4);
    }

    const handleLoginForm = async (e) =>
    {
        e.preventDefault(); //evita di ricaricare la pagina

        const data = e.target.data.value;
        const valuta = e.target.valuta.value;

        //alert(data+" "+valuta);
        const corpo = {
            valuta: valuta,
            data: data
        };

        const risposta = await axios.post(url, corpo);
        const oggetto = JSON.parse(risposta.data);

        if (oggetto["ridirezione"])
        {
            window.location.href = 'http://localhost:3000/';
        }
        else
        {
            if (oggetto["isTuttoOk"]) 
            {
                if (oggetto["listaTransizioni"] != '[]')
                {
                    //alert(JSON.parse(oggetto).length);
                    
                    creaTabella(oggetto["listaTransizioni"]); //creo la tabella 
                }
            }
            else
            {
                alert(oggetto["messaggio"]);
            }
        }
        e.preventDefault();
    }

    return (
        <div className="listTransactions">
            <h1>Storico delle transizioni</h1>

            <table>
                <thead>
                    <tr>
                        <th>Quantita Spesa</th>
                        <th>Quantita Comprata</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {parse(tabella) /* creo la tabella*/ }
                </tbody>
            </table>
            
            <h2>Filtri</h2>
            <form id = "form" onSubmit = {handleLoginForm}>
                <input type="date" id="data" name="data" /> <br /> <br />

                <select id="valuta" name="valuta" form='form'>
                    <option value="">Nessuna</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select> <br /> <br />
                <input id='bottoneInterno' type='submit'/>
            </form>

            
        </div> 
        


     );
}
 
export default ListTransactions;