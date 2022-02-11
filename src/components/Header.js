import { Link } from "react-scroll";
import { useEffect } from "react";
import "../header.css";
import "../styles.css";

function Header(props) {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".ulHeader").className = "ulHeader Scroll";
    } else {
      document.querySelector(".ulHeader").className = "ulHeader";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="sticky">
      <ul className="ulHeader">
        <div className="alignleft">
          {" "}
          <h2 className="headerName">Kelsey Nocek</h2>{" "}
        </div>
        <div className="alignright">
          {" "}
          <li className="navlink">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              className="about"
            >
              About
            </Link>{" "}
          </li>
          <li className="navlink">
            <Link to="projects" spy={true} smooth={true} className="projects">
              Projects
            </Link>
          </li>
          <li className="navlink">
            <Link to="holla" spy={true} smooth={true} className="holla">
              Holla!
            </Link>
          </li>
        </div>
        <div style={{ clear: "both" }}> </div>
      </ul>
    </div>
  );
}

export default Header;
