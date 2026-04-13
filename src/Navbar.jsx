const RED = "#c8102e"

export default function Navbar() {
  return (
    <nav style={{
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      height: "54px",
    }}>

      {/* Left links */}
      <div style={{ display: "flex", gap: "28px" }}>
        {["EVENTS", "RANKINGS", "ATHLETES", "NEWS"].map(item => (
          <span key={item} style={{
            fontSize: "11px",
            fontWeight: 800,
            color: "#111",
            letterSpacing: "1px",
            cursor: "pointer",
          }}>
            {item}
          </span>
        ))}
      </div>

      {/* UFC Logo center */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontSize: "22px",
          fontWeight: 900,
          color: "#111",
          letterSpacing: "-1px",
        }}>
          UFC
        </div>
        <div style={{
          width: "26px",
          height: "3px",
          background: RED,
          margin: "2px auto 0",
        }} />
      </div>

      {/* Right links */}
      <div style={{ display: "flex", gap: "28px" }}>
        {["CONNECT", "WATCH", "SHOP"].map(item => (
          <span key={item} style={{
            fontSize: "11px",
            fontWeight: 800,
            color: "#111",
            letterSpacing: "1px",
            cursor: "pointer",
          }}>
            {item}
          </span>
        ))}
      </div>

    </nav>
  )
}
