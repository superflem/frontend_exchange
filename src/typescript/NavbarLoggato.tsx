import {Link} from 'react-router-dom'; //se usi link invece di <a href> non passi per il server
import '../css/NavbarLoggato.css';

const NavbarLoggato = () => {
    return (
        <nav className="navbar">
            <div className="divLink">
                <Link to='/home' className='link'>Home</Link>
                <Link to='/deposit' className='link'>Carica</Link>
                <Link to='/withdraw' className='link'>Deposito</Link>
                <Link to='/buy' className='link'>Converti</Link>
                <Link to='/listTransactions' className='link'>Storico</Link>
                <Link to='/' className='link'>Logout</Link>
            </div>
        </nav>
    );
}
 
export default NavbarLoggato
