import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGlobe,
  FaRobot,
  FaPalette,
  FaTools,
} from "react-icons/fa";

import "./App.css";

import perfumeImg from "./assets/projects/perfume-site.png";
import fitnessImg from "./assets/projects/fitness-site.png";
import beautyImg from "./assets/projects/beauty-site.png";
import neonImg from "./assets/projects/neon-fest.png";

const projects = [
  {
    title: "Perfume Website",
    hebrew: "אתר בשמים",
    image: perfumeImg,
    link: "https://admirable-cocada-ae31cc.netlify.app/",
  },
  {
    title: "Fitness Website",
    hebrew: "אתר חדר כושר",
    image: fitnessImg,
    link: "https://fitness-qu.netlify.app",
  },
  {
    title: "Beauty Landing",
    hebrew: "אתר ביוטי",
    image: beautyImg,
    link: "https://beauty-landing-beta.vercel.app/",
  },
  {
    title: "Neon Wave Fest",
    hebrew: "דף נחיתה למסיבה",
    image: neonImg,
    link: "https://neon-wave-fest.vercel.app/",
  },
];

const services = [
  {
    icon: <FaGlobe />,
    title: "Websites & Landing Pages",
    hebrew: "אתרי אינטרנט ודפי נחיתה",
    text: "Custom-built websites and high-converting landing pages designed to impress visitors and grow your audience.",
  },
  {
    icon: <FaRobot />,
    title: "AI Tools for Business",
    hebrew: "כלי AI לעסקים",
    text: "Chatbots, automation workflows and smart integrations that help businesses save time and work smarter.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    hebrew: "עיצוב UI/UX",
    text: "Premium interfaces that users love — clean, intuitive and optimized for every device.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    hebrew: "תחזוקת אתרים",
    text: "Support, updates, speed optimization and improvements to keep your website sharp and reliable.",
  },
];

export default function App() {
  const form = useRef();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);

    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("שולח...");

    emailjs
      .sendForm(
        "quint_mail",
        "templateContactUs",
        form.current,
        "8wk3G6z1SbbdomcfZ"
      )
      .then(() => {
        setStatus("הפרטים נשלחו בהצלחה!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("משהו השתבש. נסה שוב.");
      });
  };

  if (loading) {
    return (
      <div className="loader">
        <motion.div
          className="loader-brand"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Quintex<span>Studio</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          Premium Web Experiences
        </motion.p>
      </div>
    );
  }

  return (
    <main>
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />

      <nav>
        <a href="#" className="brand">
          Quintex<span>Studio</span>
        </a>

        <div className="nav-links">
          <a href="#work">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-grid"></div>

        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="eyebrow">
            QUINTEX STUDIO · DIGITAL EXPERIENCE AGENCY
          </p>

          <h1 className="hero-title">
            Websites that make your business look premium.
          </h1>

          <h2 className="hero-hebrew">
            אתרים שמייצרים רושם, אמון ופניות אמיתיות
          </h2>

          <p className="hero-desc">
            We design and build modern websites, landing pages and digital
            experiences for businesses that want to stand out online.
          </p>

          <div className="available">
            <span></span>
            פתוחים לפרויקטים חדשים · Open for New Projects
          </div>

          <div className="hero-actions">
            <a href="#work">
              View Projects <FaArrowRight />
            </a>

            <a href="#contact" className="outline">
              Start a Project
            </a>
          </div>
        </motion.div>
      </section>

      <section className="services" id="services">
        <p className="section-label">What We Do / מה אנחנו עושים</p>

        <h2>Digital services built for growth.</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service"
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="num">0{index + 1}</span>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <h4>{service.hebrew}</h4>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="portfolio" id="work">
        <p className="section-label">Selected Work</p>
        <h2>Projects Portfolio</h2>

        <div className="projects">
          {projects.map((project, index) => (
            <motion.a
              className="project"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <span>0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.hebrew}</p>

                <button>
                  Visit Project <FaExternalLinkAlt />
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-text">
            <p className="section-label">Contact</p>
            <h2>Let’s create something impressive.</h2>
            <p>השאר פרטים ונחזור אליך עם כיוון לאתר שמתאים לעסק שלך.</p>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input name="name" placeholder="שם / Your name" required />

              <input
                name="from_email"
                type="email"
                placeholder="אימייל / Email"
                required
              />
            </div>

            <div className="row">
              <input name="phone" placeholder="טלפון / Phone" required />

              <select name="project_type" required defaultValue="">
                <option value="" disabled>
                  סוג פרויקט / Project Type
                </option>
                <option value="Website / אתר אינטרנט">
                  Website / אתר אינטרנט
                </option>
                <option value="Landing Page / דף נחיתה">
                  Landing Page / דף נחיתה
                </option>
                <option value="AI Tool / כלי AI">AI Tool / כלי AI</option>
                <option value="UI UX Design">UI/UX Design</option>
                <option value="Maintenance / תחזוקת אתר">
                  Maintenance / תחזוקת אתר
                </option>
                <option value="Other / אחר">Other / אחר</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="ספר לנו על הפרויקט שלך..."
            />

            <button type="submit">שלח הודעה · Send Message ↗</button>

            {status && <p className="status">{status}</p>}
          </form>
        </motion.div>
      </section>

      <footer>
        <div className="footer-brand">
          <h2>
            Quintex<span>Studio</span>
          </h2>

          <p>
           
            <br />
            Premium web design & AI tools for ambitious businesses.
          </p>
        </div>

        <div>
          <h3>Services</h3>
          <p>Websites · אתרי אינטרנט</p>
          <p>Landing Pages · דפי נחיתה</p>
          <p>AI Tools · כלי AI</p>
          <p>UI/UX Design</p>
          <p>Maintenance · תחזוקת אתרים</p>
        </div>

        <div>
          <h3>Links</h3>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="mailto:quintexstudio@gmail.com">quintexstudio@gmail.com</a>
        </div>

        <div className="copy">
          © 2026 Quintex Studio · All rights reserved · Built with ♥
          <a href="#">↑ TOP</a>
        </div>
      </footer>
    </main>
  );
}