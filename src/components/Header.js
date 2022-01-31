import { Link } from 'react-scroll';

import '../styles.css';

function Header(props) {
    return (
        <ul className='ulHeader' style={{display: 'flex', listStyle:'none', justifyContent: 'space-around'}}>
            <li><Link activeClass='active' to="about" spy={true} smooth={true}>About</Link></li>
            <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
            <li><Link to="holla" spy={true} smooth={true}>Holla!</Link></li>
        </ul>
    )
}

export default Header;