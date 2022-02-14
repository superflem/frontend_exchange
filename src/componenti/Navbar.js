import {Link} from 'react-router-dom'; //se usi link invece di <a href> non passi per il server

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="divLink">
                <Link to='/' className='link'>Home</Link>
                <Link to='/signup' className='link'>Signup</Link>
            </div>
        </nav>
    );
}
 
export default Navbar
