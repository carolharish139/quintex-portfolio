import { motion } from "framer-motion";
import {
  FaVideo,
  FaInstagram,
  FaBullhorn,
  FaPalette,
  FaLock,
  FaRobot,
  FaCog,
  FaCheck,
  FaStar,
  FaGlobe,
  FaMobileAlt,
  FaLayerGroup,
  FaHeadset,
} from "react-icons/fa";

const adSections = [
  {
    id: "01",
    title: "סרטוני AI לעסקים",
    desc: "יצירת סרטוני AI cinematic ומודרניים לפרסום העסק ברשתות חברתיות ובקמפיינים.",
    icon: <FaVideo />,
    features: [
      "Reels",
      "Startup Commercials",
      "Product Videos",
      "Motion Graphics",
      "AI Cinematic Ads",
      "Logo Reveals",
    ],
  },
  {
    id: "02",
    title: "יצירת תוכן לרשתות חברתיות",
    desc: "עיצוב תוכן מקצועי לרשתות חברתיות שמחזק את המותג ומייצר נוכחות חזקה.",
    icon: <FaInstagram />,
    features: [
      "Instagram Posts",
      "Carousels",
      "Story Designs",
      "Social Media Branding",
      "Promotional Content",
      "Content Packs",
    ],
  },
  {
    id: "03",
    title: "עיצוב מודעות פרסום",
    desc: "מודעות מקצועיות ומודרניות שמיועדות להגדיל חשיפה, קליקים והמרות.",
    icon: <FaBullhorn />,
    features: [
      "Facebook Ads",
      "Instagram Ads",
      "Promotional Banners",
      "Campaign Creatives",
      "Thumbnail Design",
    ],
    extra:
      "Campaign Creatives — לדוגמה, אם עסק משיק מוצר חדש — יוצרים לו Reel, Banner, Story, Ad Post, Thumbnail ו‑Motion Graphics כחבילת פרסום מלאה.",
  },
  {
    id: "04",
    title: "מיתוג דיגיטלי",
    desc: "בניית זהות מותג מודרנית, יוקרתית וזכירה לעסקים.",
    icon: <FaPalette />,
    features: [
      "Branding Strategy",
      "Logo Presentation",
      "Brand Colors",
      "Visual Identity",
      "Modern Tech Branding",
      "Luxury Startup Style",
    ],
  },
];

const comingSoon = [
  {
    icon: <FaRobot />,
    title: "פתרונות AI לעסקים",
    features: [
      "AI Chatbots",
      "מערכות המלצה",
      "AI Assistants",
      "אוטומציות חכמות",
      "AI Workflows",
      "AI Website Features",
    ],
  },
  {
    icon: <FaCog />,
    title: "אוטומציות לעסקים",
    features: [
      "CRM Automations",
      "WhatsApp Automations",
      "Email Flows",
      "Lead Management",
      "AI Automations",
      "Business Workflows",
    ],
  },
];

const offerCards = [
  { icon: <FaPalette />, title: "עיצוב מודרני ויוקרתי" },
  { icon: <FaRobot />, title: "שילוב AI מתקדם" },
  { icon: <FaLayerGroup />, title: "פתרונות מותאמים לעסק" },
  { icon: <FaMobileAlt />, title: "חוויית משתמש ברמה גבוהה" },
  { icon: <FaStar />, title: "מיתוג טכנולוגי עתידני" },
  { icon: <FaHeadset />, title: "שירות מקצועי ומהיר" },
];

export default function Advertising() {
  return (
    <div>
      {/* Page Hero */}
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
          <p className="eyebrow">QUINTEX STUDIO · ADVERTISING</p>
          <h1 className="page-title">
            פרסום דיגיטלי לעסקים שרוצים להיראות גדולים יותר
          </h1>
          <p className="page-subtitle">
            סרטוני AI, מודעות, תוכן ומיתוג שמעניקים לעסק נוכחות מקצועית ברשת.
          </p>
        </motion.div>
      </section>

      {/* Ad Service Sections */}
      <div className="page-sections">
        {adSections.map((section) => (
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
            {section.extra && (
              <div className="sb-extra">
                <p>{section.extra}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Coming Soon */}
      <section className="coming-soon-section">
        <p className="section-label">Coming Soon</p>
        <h2 className="cs-heading">בקרוב אצל Quintex Studio</h2>
        <div className="coming-soon-grid">
          {comingSoon.map((item) => (
            <motion.div
              key={item.title}
              className="coming-soon-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="cs-badge">COMING SOON</span>
              <div className="cs-lock">
                <FaLock />
              </div>
              <div className="cs-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <div className="cs-features">
                {item.features.map((f) => (
                  <span key={f} className="cs-feature">
                    {f}
                  </span>
                ))}
              </div>
              <div className="cs-blur-overlay" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="what-we-offer">
        <p className="section-label">מה אנחנו מציעים</p>
        <h2>מה Quintex Studio מציע?</h2>
        <div className="offer-grid">
          {offerCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="offer-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="offer-icon">{card.icon}</div>
              <h4>{card.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
