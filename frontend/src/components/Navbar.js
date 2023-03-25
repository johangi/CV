import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <h1>Johan Giæver</h1>
            <div className='nav-links'>
                <Link to='/'>Hjem</Link>
                <Link to='/om'>Om meg</Link>
                <Link to='/erfaring'>Erfaring</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;