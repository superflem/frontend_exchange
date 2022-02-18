import '../css/Soldi.css';

const Soldi = () => {

    const euro = "19,50 €";
    const dollari = "0,60 $";
    
    return (
        <nav className="navbar">
            <div className="divLink">
                <label>{euro}</label>
                <label>{dollari}</label>
            </div>
        </nav>
    );

}
 
export default Soldi;