import { Link } from 'react-scroll';

import '../styles.css';
import '../header.css'

function Header(props) {
    return (
        <ul className='ulHeader'>
         <div className='alignleft'> <h2 className='headerName'>Kelsey Nocek</h2> </div>  
          <div className='alignright'> <li><Link activeClass='active' to="about" spy={true} smooth={true} className='about'>About</Link> </li>
            <li><Link to="projects" spy={true} smooth={true} className='projects'>Projects</Link></li>
            <li><Link to="holla" spy={true} smooth={true} className='holla'>Holla!</Link></li>
            </div>
            <div style={{clear: "both"}}> </div>
        </ul>
    )
}

export default Header;