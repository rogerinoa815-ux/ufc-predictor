const RED = "#c8102e"

function Card({ label, f1, f2, f1img, f2img, event, date, win }) {
  return (
    <div style={{
      background: "#111",
      border: "1px solid #2a2a2a",
      marginBottom: "12px",
      overflow: "hidden",
    }}>

      {/* Card Header */}
      <div style={{
        background: "#0a0a0a",
        padding: "7px 12px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #1e1e1e",
      }}>
        <span style={{ fontSize: "10px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</span>
        <span style={{ fontSize: "10px", color: "#555" }}>{event}</span>
      </div>

      {/* Card Body */}
      <div style={{ padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>

        {/* Fighter Avatars */}
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <img src={f1img} style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "2px" }} />
          {win && (
            <span style={{ background: RED, color: "#fff", fontSize: "8px", padding: "2px 5px", fontWeight: 700 }}>WIN</span>
          )}
          <span style={{background: RED, color: '#fff', fontSize:'8px', padding: '2px 5px', fontWeight: 700}}>VS</span>
          <img src={f2img} style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "2px" }} />
        </div>

        {/* Fight Info */}
        <div>
          <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>
            {f1} <span style={{ color: "#555" }}>VS</span> {f2}
          </div>
          <div style={{ fontSize: "11px", color: "#888", marginTop: "2px", textTransform: "uppercase" }}>{date}</div>
        </div>

      </div>
    </div>
  )
}

export default function FightCard() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px 40px" }}>
      <Card
        label="Last Fight"
         f1="TOPURIA"
         f2="OLIVEIRA"
         f1img={`${import.meta.env.BASE_URL}ilia_topuria.png`}
         f2img={`${import.meta.env.BASE_URL}charles_oliveira.png`}
         event="UFC 317"
         date="JUN. 28, 2025"
         win={true}/>


      <Card
        label="Upcoming Fight"
        f1="TOPURIA"
        f2="GAETHJE"
        f1img={`${import.meta.env.BASE_URL}ilia_topuria.png`}
        f2img={`${import.meta.env.BASE_URL}justin_gaethje.png`}
        event="UFC FREEDOM 250"
        date="JUN. 14, 2026"
        win={false}/>

    </div>
  )
}