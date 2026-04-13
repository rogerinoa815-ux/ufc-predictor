const RED = '#c8102e'

function Tag({label}){
    return (
        <span style={{
            display:'inline-block',
            border: '1px solid #444',
            color: '#ccc',
            fontSize: '10px',
            padding: '3px 8px',
            marginRight: '6px',
            marginBottom: '6px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
        }}>
            {label}
        </span>
    )
}

function StatBox({value, label}){
    return (
        <div style={{textAlign: 'center', minWidth: '80px'}}>
            <div style={{
                fontSize: '42px',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1
            }}>
                {value}
            </div>

            <div style={{
                borderTop: `3px solid ${RED}`,
                marginTop: '8px',
                paddingTop: '6px',
                fontSize: '10px',
                color: '#888',
                letterSpacing: '1px',
                textTransform:'uppercase'
            }}>
                {label}
            </div>
        </div>
    )
}

export default function Hero({ f }) {
  return (
    <div style={{
      background: "#131313",
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "40px 40px 32px",
    }}>

      {/* Tags */}
      <div style={{ marginBottom: "14px" }}>
        {f.tags.map(tag => <Tag key={tag} label={tag} />)}
      </div>

      {/* Nickname */}
      <div style={{
        fontSize: "13px",
        color: "#aaa",
        fontStyle: "italic",
        marginBottom: "4px",
        letterSpacing: "1px",
      }}>
        {f.nickname}
      </div>

      {/* Fighter Name */}
      <h1 style={{
        fontSize: "54px",
        fontWeight: 900,
        lineHeight: 1.0,
        margin: "0 0 10px",
      }}>
        {f.name.split(" ")[0]} <br />
        {f.name.split(" ")[1]}
      </h1>

      {/* Division + Record */}
      <div style={{ color: "#888", fontSize: "13px", marginBottom: "2px" }}>
        {f.division}
      </div>
      <div style={{ color: "#888", fontSize: "13px", marginBottom: "36px" }}>
        {f.record}
      </div>

      {/* Stat Boxes */}
      <div style={{ display: "flex", gap: "36px" }}>
        <StatBox value={f.kos} label="Wins by Knockout" />
        <StatBox value={f.subs} label="Wins by Submission" />
        <StatBox value={f.firstRound} label="First Round Finishes" />
      </div>

      {/* Extra Info */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "28px",
      }}>
        <div style={{ fontSize: "12px", color: "#666" }}>
          Age: <span style={{ color: "#aaa" }}>{f.age}</span>
        </div>
        <div style={{ fontSize: "12px", color: "#666" }}>
          Height: <span style={{ color: "#aaa" }}>{f.height}</span>
        </div>
        <div style={{ fontSize: "12px", color: "#666" }}>
          Reach: <span style={{ color: "#aaa" }}>{f.reach}</span>
        </div>
      </div>

    </div>
  )
}