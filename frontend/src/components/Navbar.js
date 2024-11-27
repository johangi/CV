import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <h1>Johan Giæver</h1>
                <li>
                    <NavLink to='/' activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeClassName="active-link">About Me</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;