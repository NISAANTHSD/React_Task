import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img 
            src="https://www.bmw.com/etc.clientlibs/settings/wcm/designs/bmwcom/base/resources/ci2020/img/logo-light.svg" 
            alt="BMW Logo"
            className="bmw-logo"
          />
        </Link>
        <h1>BMW</h1>
      </div>
      <h2  className='bmw'>( Bayerische Motoren Werke GmbH )</h2>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/features" className="nav-link">Features</Link>
        <Link to="/models" className="nav-link">Models</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
