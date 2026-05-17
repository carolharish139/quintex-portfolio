export default function QxLogo({ height = 38 }) {
  const fontSize = Math.round(height * 0.88);
  return (
    <span
      style={{
        fontSize: fontSize,
        fontWeight: 900,
        fontFamily: "'Inter', 'Heebo', sans-serif",
        lineHeight: 1,
        letterSpacing: "-0.5px",
        userSelect: "none",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <span style={{ color: "#ffffff" }}>Quintex</span>
      <span style={{ color: "#9c82ff" }}>Studio</span>
    </span>
  );
}
