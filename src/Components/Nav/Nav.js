import './Nav.css';
import Logo from '../../img/Logo.png';
import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <div className="Nav-Img-Container">
              <Link to="/"><img src={Logo} alt="logo"/></Link>
            </div>
        </nav>
     );
}
 
export default Nav;