import './Navbar.css';
import logo from './images/sf-logo.png'
import {CgProfile} from 'react-icons/cg';
import {FiHelpCircle} from 'react-icons/fi';


const Navbar = () => {
    return ( 
        <div>
            <nav className="Navbar">
                <img src={logo} alt="State Farm Logo" className="Logo" />
                <a className="Title"> Auto Quoting & Purchase On/Off Request</a>
                <ul className="Links">
                    <li><a className="Icon" href="#"><FiHelpCircle style={{color: '#403C3C', fontSize:'30px'}}/></a></li>
                    <li><a className="Icon" href="#"><CgProfile style={{color: '#403C3C', fontSize: '30px'}}/></a></li>
                </ul>
            </nav>       
        </div>
     );
}
 
export default Navbar;

