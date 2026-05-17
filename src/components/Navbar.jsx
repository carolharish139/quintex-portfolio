import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import QxLogo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  const goContact = (e) => {
    e.preventDefault();
    close();
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  return (
    <>
      <nav>
        <Link to="/" className="brand" onClick={close}>
          <QxLogo idPrefix="nav" height={28} />
        </Link>

        <div className="nav-links">
          <Link to="/">בית</Link>
          <Link to="/websites">אתרים</Link>
          <Link to="/advertising">פרסום</Link>
          <Link to="/applications">אפליקציות</Link>
          <Link to="/projects">פרויקטים</Link>
          <a href="#contact" onClick={goContact}>צור קשר</a>
        </div>

        <button
          className={`hamburger${open ? " hamburger--open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-nav${open ? " mobile-nav--open" : ""}`}>
        <div className="mobile-nav-links">
          <Link to="/" onClick={close}>בית</Link>
          <Link to="/websites" onClick={close}>אתרים</Link>
          <Link to="/advertising" onClick={close}>פרסום</Link>
          <Link to="/applications" onClick={close}>אפליקציות</Link>
          <Link to="/projects" onClick={close}>פרויקטים</Link>
          <a href="#contact" onClick={goContact}>צור קשר</a>
        </div>
      </div>
    </>
  );
}
