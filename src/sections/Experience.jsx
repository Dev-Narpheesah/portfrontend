import React from "react";

export default function Experience(){
  return (
    <section id="experience" style={{marginBottom:36}}>
      <h2>Experience</h2>
      <div style={{display:"grid", gap:12, marginTop:12}}>
        <div className="card">
          <h4 style={{margin:0}}>Senior Developer — Acme Corp</h4>
          <small style={{color:"var(--muted)"}}>2022 — Present</small>
          <p style={{color:"var(--muted)"}}>Built X, improved Y, led Z.</p>
        </div>

        <div className="card">
          <h4 style={{margin:0}}>Frontend Engineer — Another Co</h4>
          <small style={{color:"var(--muted)"}}>2019 — 2022</small>
          <p style={{color:"var(--muted)"}}>Worked on performance, accessibility, and design systems.</p>
        </div>
      </div>
    </section>
  );
}
