import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="container">
    <Link to="/">
        <div class="header-logo">
          <div class="D-box">
            <h1 class="M">D</h1>
          </div>
          <div class="Y-box">
            <h1 class="O">Y</h1>
          </div>
        </div>
        </Link>
      <div class="nav">
        <ul class="nav--lists">
          <div class="nav--icon">menu</div>
          <Link to="/">
          <li className="home">Home</li>
          </Link>
          <Link to="/portfolio">
          <li class="work">Projects</li>
          </Link>
          <Link to="/resume">
          <li class="resume">Resume</li>
          </Link>
          <Link to="/contact">
          <li class="contact">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
