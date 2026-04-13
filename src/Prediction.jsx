import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const GOLD = "#c9a84c"
const BLUE = "#3a8fde"

const modelData = [
  { name: "Log. Reg.", topuria: 72, gaethje: 28 },
  { name: "Rnd Forest", topuria: 75, gaethje: 25 },
  { name: "Grad. Boost", topuria: 74, gaethje: 26 },
  { name: "Ensemble", topuria: 74, gaethje: 26 },
]

const statRows = [
  { label: "Strike Acc.", t: "54%", g: "44%", tWins: true },
  { label: "Strike Def.", t: "62%", g: "52%", tWins: true },
  { label: "Finish Rate", t: "89%", g: "80%", tWins: true },
  { label: "Strikes/min", t: "5.26", g: "5.83", tWins: false },
  { label: "Absorbed/min", t: "2.81", g: "5.65", tWins: true },
  { label: "TD Defense", t: "83%", g: "72%", tWins: true },
  { label: "Title Record", t: "3-0", g: "0-2", tWins: true },
]

export default function Prediction() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 40px" }}>

      {/* Section Header */}
      <div style={{ borderLeft: "4px solid #c8102e", paddingLeft: "16px", marginBottom: "28px" }}>
        <div style={{ fontSize: "10px", color: "#666", letterSpacing: "3px", marginBottom: "4px" }}>MACHINE LEARNING</div>
        <div style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.5px" }}>FIGHT PREDICTION</div>
      </div>

      {/* Win Probability Bar */}
      <div style={{ background: "#111", border: "1px solid #1e1e1e", padding: "28px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
          <div>
            <div style={{ fontSize: "10px", color: "#666", letterSpacing: "2px" }}>TOPURIA</div>
            <div style={{ fontSize: "42px", fontWeight: 900, color: GOLD, lineHeight: 1 }}>74%</div>
          </div>
          <div style={{ textAlign: "center", alignSelf: "center" }}>
            <div style={{ fontSize: "10px", color: "#555", letterSpacing: "2px" }}>ENSEMBLE WIN PROBABILITY</div>
            <div style={{ fontSize: "11px", color: "#333", marginTop: "4px" }}>3 models · cross-validated</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "10px", color: "#666", letterSpacing: "2px" }}>GAETHJE</div>
            <div style={{ fontSize: "42px", fontWeight: 900, color: BLUE, lineHeight: 1 }}>26%</div>
          </div>
        </div>
        <div style={{ display: "flex", height: "12px" }}>
          <div style={{ width: "74%", background: GOLD }} />
          <div style={{ width: "26%", background: BLUE }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
          <span style={{ fontSize: "10px", color: "#555" }}>FAVORITE (-600)</span>
          <span style={{ fontSize: "10px", color: "#555" }}>UNDERDOG (+400)</span>
        </div>
      </div>

      {/* Chart + Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

        {/* Bar Chart */}
        <div style={{ background: "#111", border: "1px solid #1e1e1e", padding: "24px" }}>
          <div style={{ fontSize: "10px", color: "#666", letterSpacing: "2px", marginBottom: "16px" }}>MODEL BREAKDOWN</div>
          <div style={{ height: "200px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelData} barGap={2} barSize={16}>
                <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: "#444", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
                <Tooltip contentStyle={{ background: "#1a1a1a", border: "1px solid #333", fontSize: "12px" }} formatter={(v, n) => [`${v}%`, n]} />
                <Bar dataKey="topuria" name="Topuria" fill={GOLD} radius={[2, 2, 0, 0]} />
                <Bar dataKey="gaethje" name="Gaethje" fill={BLUE} radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            {[[GOLD, "Topuria"], [BLUE, "Gaethje"]].map(([c, n]) => (
              <span key={n} style={{ fontSize: "11px", color: "#888", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ display: "inline-block", width: "10px", height: "10px", background: c }} />{n}
              </span>
            ))}
          </div>
        </div>

        {/* Stat Table */}
        <div style={{ background: "#111", border: "1px solid #1e1e1e", padding: "24px" }}>
          <div style={{ fontSize: "10px", color: "#666", letterSpacing: "2px", marginBottom: "14px" }}>STAT COMPARISON</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr>
                <th style={{ color: GOLD, padding: "4px 0 10px", textAlign: "left", fontSize: "10px" }}>TOPURIA</th>
                <th style={{ color: "#555", padding: "4px 0 10px", textAlign: "center", fontSize: "10px" }}>STAT</th>
                <th style={{ color: BLUE, padding: "4px 0 10px", textAlign: "right", fontSize: "10px" }}>GAETHJE</th>
              </tr>
            </thead>
            <tbody>
              {statRows.map(row => (
                <tr key={row.label} style={{ borderTop: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "8px 0", color: row.tWins ? GOLD : "#555", fontWeight: row.tWins ? 700 : 400 }}>{row.t}</td>
                  <td style={{ padding: "8px 0", color: "#555", textAlign: "center", fontSize: "10px", textTransform: "uppercase" }}>{row.label}</td>
                  <td style={{ padding: "8px 0", color: !row.tWins ? BLUE : "#555", fontWeight: !row.tWins ? 700 : 400, textAlign: "right" }}>{row.g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: "40px", borderTop: "1px solid #1a1a1a", paddingTop: "20px" }}>
        <div style={{ fontSize: "10px", color: "#3a3a3a", letterSpacing: "2px" }}>UFC FREEDOM 250 · JUNE 14, 2026 · WHITE HOUSE · WASHINGTON D.C.</div>
        <div style={{ fontSize: "10px", color: "#2a2a2a", marginTop: "6px" }}>BUILT WITH PYTHON · SCIKIT-LEARN · REACT · RECHARTS</div>
      </div>

    </div>
  )
}