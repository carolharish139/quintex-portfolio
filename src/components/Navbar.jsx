import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="brand">
        Quintex<span>Studio</span>
      </Link>
      <div className="nav-links">
        <Link to="/">בית</Link>
        <Link to="/websites">אתרים</Link>
        <Link to="/advertising">פרסום</Link>
        <Link to="/projects">פרויקטים</Link>
        <a href="/#contact">צור קשר</a>
      </div>
    </nav>
  );
}
