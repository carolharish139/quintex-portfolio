import { motion } from "framer-motion";
import { FaMobileAlt, FaBell, FaPalette, FaUserCheck, FaCheck } from "react-icons/fa";

const whySections = [
  {
    id: "01",
    icon: <FaMobileAlt />,
    title: "חוויית משתמש מהירה ומקצועית",
    desc: "אפליקציה מעניקה לעסק שלך נוכחות ישירה ומהירה בטלפון של הלקוח, עם ביצועים ברמה של מוצרי עולם.",
    features: ["Native Performance", "Smooth Animations", "Fast Loading", "Responsive Design", "Offline Mode", "60fps UX"],
  },
  {
    id: "02",
    icon: <FaBell />,
    title: "התראות חכמות ומיידיות",
    desc: "שמור על קשר ישיר עם הלקוחות שלך דרך Push Notifications חכמות שמגדילות את שיעורי החזרה לאפליקציה.",
    features: ["Smart Targeting", "Re-engagement", "Custom Alerts", "Campaign Notifications", "Real-time Updates", "Analytics"],
  },
  {
    id: "03",
    icon: <FaPalette />,
    title: "מיתוג פרימיום לעסק שלך",
    desc: "כל פיקסל מעוצב כדי לשקף את זהות המותג שלך ברמה הגבוהה ביותר, עם עיצוב ממשק שמייחד אותך.",
    features: ["Custom Design System", "Brand Colors", "Icon Sets", "Splash Screens", "Premium Typography", "Consistent Identity"],
  },
  {
    id: "04",
    icon: <FaUserCheck />,
    title: "שימור לקוחות ונאמנות",
    desc: "תכונות מובנות לשימור לקוחות: תוכניות נאמנות, אנליטיקה מתקדמת ופרסונליזציה שגורמת ללקוחות לחזור.",
    features: ["Loyalty Programs", "User Analytics", "Feedback Systems", "Personalization", "Reward Mechanics", "CRM Integration"],
  },
];

const appProjects = [
  {
    title: "Aura Beauty Studio",
    desc: "אפליקציית הזמנות יוקרתית לסלונים וסטודיות יופי עם עיצוב פרימיום.",
    image: "/APPBEUTY.png",
    tags: ["iOS & Android", "Booking System", "Premium UI", "Beauty Experience"],
    accent: "#ff6eb4",
  },
  {
    title: "FitFlow",
    desc: "אפליקציית כושר מודרנית עם מעקב אימונים וחוויית משתמש ברמה גבוהה.",
    image: "/FITAPP.png",
    tags: ["Fitness App", "Modern UX", "Training System", "Mobile Experience"],
    accent: "#59d5ff",
  },
  {
    title: "InkSpace",
    desc: "אפליקציה סינמטית לסטודיו קעקועים עם מערכת הזמנות ותצוגת אמנים.",
    image: "/APPTATTO.png",
    tags: ["Tattoo Studio", "Dark UI", "Booking App", "Cinematic Design"],
    accent: "#9c82ff",
  },
];

export default function Applications() {
  return (
    <div>
      {/* ── HERO (same style as Websites / Advertising) ── */}
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
          <p className="eyebrow">QUINTEX STUDIO · APPLICATIONS</p>
          <h1 className="page-title">
            העסק שלך.<br />האפליקציה שלך.
          </h1>
          <p className="page-subtitle">
            פיתוח אפליקציות מודרניות לעסקים, מותגים וסטארטאפים עם חוויית משתמש פרימיום ועיצוב ברמה גבוהה.
          </p>
        </motion.div>
      </section>

      {/* ── WHY APPS (service-block style, ABOVE showcase) ── */}
      <div className="page-sections">
        {whySections.map((section) => (
          <motion.div
            key={section.id}
            className="service-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="sb-header">
              <div className="sb-meta">
                <span className="sb-num">{section.id}</span>
                <div className="sb-icon">{section.icon}</div>
              </div>
              <div className="sb-text">
                <h2 className="sb-title">{section.title}</h2>
                <p className="sb-desc">{section.desc}</p>
              </div>
            </div>
            <div className="sb-features">
              {section.features.map((f) => (
                <div key={f} className="sb-feature-item">
                  <FaCheck className="check-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── APP EXAMPLES (showcase, BELOW why section) ── */}
      <section className="app-showcase">
        <p className="section-label">דוגמאות · Examples</p>
        <h2 className="app-showcase-title">אפליקציות שעיצבנו</h2>
        <div className="app-cards-grid">
          {appProjects.map((app, idx) => (
            <motion.div
              key={app.title}
              className="app-card"
              style={{ "--app-accent": app.accent }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="app-card-img">
                <img src={app.image} alt={app.title} loading="lazy" decoding="async" />
                <div className="app-card-glow" />
              </div>
              <div className="app-card-body">
                <h3>{app.title}</h3>
                <p>{app.desc}</p>
                <div className="app-tags">
                  {app.tags.map((t) => (
                    <span key={t} className="app-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
