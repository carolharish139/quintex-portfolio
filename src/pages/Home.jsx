import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiMonitor, FiBarChart2 } from "react-icons/fi";

export default function Home() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("שולח...");
    emailjs
      .sendForm("quint_mail", "templateContactUs", form.current, "8wk3G6z1SbbdomcfZ")
      .then(() => {
        setStatus("הפרטים נשלחו בהצלחה!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("משהו השתבש. נסה שוב.");
      });
  };

  return (
    <>
      {/* ── VIDEO HERO ── */}
      <section className="video-hero">
        <video autoPlay muted loop playsInline preload="auto" className="video-bg">
          <source src="/quintexVideo.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />

        <motion.div
          className="video-content"
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <p className="eyebrow">QUINTEX STUDIO · DIGITAL EXPERIENCE AGENCY</p>

          <h1 className="video-main-title">
            אתרים, פרסום ותוכן דיגיטלי
            <br />
            לעסקים שרוצים להיראות פרימיום
          </h1>

          <p className="video-eng-sub">
            Websites, Advertising &amp; Digital Content for Businesses That Want to Look Premium
          </p>

          <div className="video-actions">
            <a href="#contact" className="btn-primary">התחל פרויקט</a>
            <Link to="/projects" className="btn-outline">ראה פרויקטים</Link>
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="contact-hero" id="contact">
        <motion.div
          className="contact-hero-inner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-hero-text">
            <p className="section-label">צור קשר · Contact</p>
            <h2>בואו נבנה משהו מרשים</h2>
            <p>השאר פרטים ונחזור אליך עם כיוון לפרויקט שמתאים לעסק שלך.</p>
          </div>

          <form ref={form} onSubmit={sendEmail} dir="rtl">
            <div className="row">
              <input name="name" placeholder="שם מלא" required />
              <input name="from_email" type="email" placeholder="אימייל" required />
            </div>
            <div className="row">
              <input name="phone" placeholder="טלפון" required />
              <select name="project_type" required defaultValue="">
                <option value="" disabled>סוג פרויקט</option>
                <option value="אתר">אתר</option>
                <option value="דף נחיתה">דף נחיתה</option>
                <option value="פרסום לעסק">פרסום לעסק</option>
                <option value="סרטון AI">סרטון AI</option>
                <option value="תוכן לרשתות חברתיות">תוכן לרשתות חברתיות</option>
                <option value="אחר">אחר</option>
              </select>
            </div>
            <textarea name="message" placeholder="הודעה..." />
            <button type="submit">שלח הודעה ↗</button>
            {status && <p className="status">{status}</p>}
          </form>
        </motion.div>
      </section>

      {/* ── CATEGORY CARDS ── */}
      <section className="categories">
        <motion.div
          className="category-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <div className="category-num">01</div>
          <div className="category-icon">
            <FiMonitor />
          </div>
          <h2>אתרים</h2>
          <p>בניית אתרים, דפי נחיתה, UI/UX ופרויקטים דיגיטליים.</p>
          <Link to="/websites" className="category-btn">
            לעמוד האתרים <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div
          className="category-card category-card-cyan"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <div className="category-num">02</div>
          <div className="category-icon cat-cyan">
            <FiBarChart2 />
          </div>
          <h2>פרסום</h2>
          <p>סרטוני AI, מודעות, תוכן לרשתות חברתיות ומיתוג דיגיטלי.</p>
          <Link to="/advertising" className="category-btn cat-btn-cyan">
            לעמוד הפרסום <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
