import '../css/Form.css';
import '../css/ListTransactions.css';
const ListTransactions = () => {

    const max = 32;

    return (
        <div className="listTransactions">
            <h1>Storico delle transizioni</h1>

            <table>
                <tr>
                    <th>Quantita Spesa</th>
                    <th>Quantita Comprata</th>
                    <th>Data</th>
                </tr>
                <tr className = "dispari">
                    <td>14 $</td>
                    <td>16 €</td>
                    <td>2022-02-14</td>
                </tr>
                <tr>
                    <td>153 €</td>
                    <td>1 $</td>
                    <td>2022-01-13</td>
                </tr>
                <tr className = "dispari">
                    <td>13 $</td>
                    <td>11 €</td>
                    <td>2021-11-30</td>
                </tr>
            </table>
            
            <h2>Filtri</h2>
            <form id = "form">
                <input type="date" id="data" name="data" /> <br /> <br />

                <select id="valuta" name="valuta" form='form'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select> <br /> <br />
                <input id='bottoneInterno' type='submit'/>
            </form>

            
        </div> 
        


     );
}
 
export default ListTransactions;