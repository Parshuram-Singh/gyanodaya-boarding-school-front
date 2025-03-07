import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>ABC Primary School</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
