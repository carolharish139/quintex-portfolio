import { motion } from "framer-motion";
import {
  FaVideo,
  FaInstagram,
  FaBullhorn,
  FaPalette,
  FaCheck,
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
            פרסום דיגיטלי לעסקים<br />שרוצים להיראות גדולים יותר
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

      {/* ── AD EXAMPLES ── */}
      <section className="ad-examples">
        <p className="section-label">דוגמאות · Examples</p>
        <h2 className="ad-examples-title">עבודות תוכן דיגיטלי שביצענו</h2>

        <div className="ad-case">
          <motion.div
            className="ad-case-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="ad-case-num">01</span>
            <div>
              <h3>קורס מסחר בבורסה</h3>
              <p>לוגו, פוסטים לאינסטגרם ועיצוב סטוריס מקצועי</p>
            </div>
          </motion.div>
          <div className="ad-case-images">
            <motion.div
              className="ad-img-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <img src="/trendpost.png" alt="Stock market course — posts" loading="lazy" decoding="async" />
              <span className="ad-img-label">Posts · Instagram</span>
            </motion.div>
            <motion.div
              className="ad-img-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <img src="/trendstory.png" alt="Stock market course — stories" loading="lazy" decoding="async" />
              <span className="ad-img-label">Stories · Instagram</span>
            </motion.div>
          </div>
        </div>

        <div className="ad-case">
          <motion.div
            className="ad-case-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="ad-case-num">02</span>
            <div>
              <h3>אתר בשמים יוקרתי</h3>
              <p>לוגו, פוסטים לאינסטגרם ועיצוב סטוריס מקצועי</p>
            </div>
          </motion.div>
          <div className="ad-case-images">
            <motion.div
              className="ad-img-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <img src="/perpost.png" alt="Perfume brand — posts" loading="lazy" decoding="async" />
              <span className="ad-img-label">Posts · Instagram</span>
            </motion.div>
            <motion.div
              className="ad-img-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <img src="/perstory.png" alt="Perfume brand — stories" loading="lazy" decoding="async" />
              <span className="ad-img-label">Stories · Instagram</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
