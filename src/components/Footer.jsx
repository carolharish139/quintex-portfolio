import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <h2>
          Quintex<span>Studio</span>
        </h2>
        <p>
          אתרים, פרסום ותוכן דיגיטלי לעסקים שרוצים להיראות פרימיום.
          <br />
          Premium web design &amp; AI tools for ambitious businesses.
        </p>
      </div>

      <div>
        <h3>שירותים</h3>
        <p>בניית אתרים</p>
        <p>דפי נחיתה</p>
        <p>סרטוני AI</p>
        <p>תוכן לרשתות חברתיות</p>
        <p>מודעות פרסום</p>
        <p>מיתוג דיגיטלי</p>
        <p className="footer-coming">פתרונות AI — Coming Soon</p>
        <p className="footer-coming">אוטומציות — Coming Soon</p>
      </div>

      <div>
        <h3>ניווט</h3>
        <Link to="/">בית</Link>
        <Link to="/websites">אתרים</Link>
        <Link to="/advertising">פרסום</Link>
        <Link to="/projects">פרויקטים</Link>
        <a href="/#contact">צור קשר</a>
        <a href="mailto:quintexstudio@gmail.com">quintexstudio@gmail.com</a>
      </div>

      <div className="copy">
        © 2026 Quintex Studio · All rights reserved · Built with ♥
        <a href="#">↑ TOP</a>
      </div>
    </footer>
  );
}
