import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import perfumeImg from "../assets/projects/perfume-site.png";
import fitnessImg from "../assets/projects/fitness-site.png";
import beautyImg from "../assets/projects/beauty-site.png";
import neonImg from "../assets/projects/neon-fest.png";
import restaurantImg from "../assets/projects/restaurant.png";
import stocksImg from "../assets/projects/stocks.png";

const projects = [
  {
    title: "Perfume Website",
    hebrew: "אתר בשמים",
    desc: "אתר בשמים יוקרתי עם עיצוב פרימיום, חוויית משתמש נקייה ואווירה מעודנת.",
    image: perfumeImg,
    link: "https://admirable-cocada-ae31cc.netlify.app/",
    tags: ["אתר תדמית", "Luxury", "UI/UX"],
  },
  {
    title: "Fitness Website",
    hebrew: "אתר חדר כושר",
    desc: "אתר לחדר כושר עם עיצוב אנרגטי, מבנה ברור ותצוגת שירותים מקצועית.",
    image: fitnessImg,
    link: "https://fitness-qu.netlify.app",
    tags: ["אתר תדמית", "Responsive", "Landing Page"],
  },
  {
    title: "Beauty Landing",
    hebrew: "אתר ביוטי",
    desc: "דף נחיתה לעסק ביוטי עם עיצוב נשי, CTA חזק ותוכן ממוקד המרות.",
    image: beautyImg,
    link: "https://beauty-landing-beta.vercel.app/",
    tags: ["Landing Page", "Beauty", "Conversions"],
  },
  {
    title: "Neon Wave Fest",
    hebrew: "דף נחיתה למסיבה",
    desc: "דף נחיתה לאירוע עם עיצוב ניאון, אנימציות ואווירה ייחודית.",
    image: neonImg,
    link: "https://neon-wave-fest.vercel.app/",
    tags: ["Event", "Neon Design", "Landing Page"],
  },
  {
    title: "Restaurant Website",
    hebrew: "אתר מסעדה",
    desc: "אתר מסעדה מודרני עם עיצוב יוקרתי, חוויית משתמש נקייה ותצוגת תפריט מקצועית.",
    image: restaurantImg,
    link: "https://guileless-gelato-72f632.netlify.app/",
    tags: ["אתר מסעדה", "Responsive", "UI/UX", "Premium Design"],
  },
  {
    title: "Stock Market Course",
    hebrew: "קורס בורסה",
    desc: "אתר לקורס בורסה עם עיצוב ממוקד המרות, אזורי CTA ברורים ומבנה מקצועי.",
    image: stocksImg,
    link: "https://dulcet-mandazi-c22efb.netlify.app/",
    tags: ["דף מכירה", "קורס דיגיטלי", "Landing Page", "Conversion"],
  },
];

export default function Projects() {
  return (
    <div>
      <section className="page-hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
        <motion.div
          className="page-hero-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">QUINTEX STUDIO · SELECTED WORK</p>
          <h1 className="page-title">פרויקטים שביצענו</h1>
          <p className="page-subtitle">
            אתרים, דפי נחיתה ועיצובים שבנינו לעסקים שרוצים לבלוט אונליין.
          </p>
        </motion.div>
      </section>

      <section className="portfolio projects-page" id="work">
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
              transition={{ delay: (index % 2) * 0.12 }}
              viewport={{ once: true }}
            >
              <div
                className="project-img"
                style={!project.image ? { background: project.imageBg } : {}}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.title[0]}</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <span className="proj-num">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p className="proj-desc">{project.desc}</p>
                {project.tags && (
                  <div className="proj-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="proj-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <button>
                  Visit Project <FaExternalLinkAlt />
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
