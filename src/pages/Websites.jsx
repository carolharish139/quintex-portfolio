import { motion } from "framer-motion";
import { FaCode, FaBullseye, FaPalette, FaTools, FaCheck } from "react-icons/fa";

const sections = [
  {
    id: "01",
    title: "בניית אתרים פרימיום",
    desc: "אתרים מודרניים, מהירים ומעוצבים ברמה גבוהה לעסקים שרוצים להיראות מקצועיים ולבלוט אונליין.",
    icon: <FaCode />,
    features: [
      "עיצוב מותאם אישית",
      "Responsive למובייל",
      "UI/UX מודרני",
      "אנימציות ואפקטים",
      "Landing Pages",
      "אתרי תדמית",
      "אתרי SaaS",
      "דפי מכירה",
    ],
  },
  {
    id: "02",
    title: "Landing Pages להמרות",
    desc: "דפי נחיתה מהירים וממוקדי המרה לקמפיינים ופרסום.",
    icon: <FaBullseye />,
    features: [
      "CTA Sections",
      "Conversion Optimization",
      "Modern UI",
      "Fast Loading",
      "Lead Generation Pages",
      "Sales Funnels",
    ],
  },
  {
    id: "03",
    title: "UI/UX Design",
    desc: "עיצוב ממשקים נקיים, מודרניים ונוחים לשימוש שמעניקים לעסק מראה מקצועי.",
    icon: <FaPalette />,
    features: [
      "עיצוב חוויית משתמש",
      "עיצוב מובייל ודסקטופ",
      "מבנה עמודים ברור",
      "עיצוב מודרני",
      "שיפור חוויית הלקוח",
    ],
  },
  {
    id: "04",
    title: "Website Maintenance",
    desc: "תחזוקת אתרים, שיפורים, עדכונים ואופטימיזציה כדי שהאתר יישאר מהיר, חד ואמין.",
    icon: <FaTools />,
    features: [
      "עדכונים",
      "תיקוני באגים",
      "שיפור מהירות",
      "שדרוגים עיצוביים",
      "תמיכה שוטפת",
    ],
  },
];

export default function Websites() {
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
          <p className="eyebrow">QUINTEX STUDIO · WEBSITES</p>
          <h1 className="page-title">אתרים שבונים אמון ונראים פרימיום</h1>
          <p className="page-subtitle">
            אנחנו בונים אתרים מודרניים, מהירים ומעוצבים ברמה גבוהה לעסקים שרוצים לבלוט אונליין.
          </p>
        </motion.div>
      </section>

      {/* Service Sections */}
      <div className="page-sections">
        {sections.map((section) => (
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
    </div>
  );
}
