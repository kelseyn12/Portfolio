import { Link } from 'react-scroll';

import '../styles.css';

function Header(props) {
    return (
        <ul className='ulHeader'>
         <div className='alignleft'> <h2 className='headerName'>Kelsey Nocek</h2> </div>  
          <div className='alignright'> <li><Link activeClass='active' to="about" spy={true} smooth={true}>About</Link></li>
            <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
            <li><Link to="holla" spy={true} smooth={true}>Holla!</Link></li>
            </div>
            <div style={{clear: "both"}}> </div>
        </ul>
    )
}

export default Header;