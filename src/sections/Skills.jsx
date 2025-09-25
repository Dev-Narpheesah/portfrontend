import React from "react";

const skills = [
  {group:"Frontend", items:["React", "TypeScript", "Vite", "Tailwind"]},
  {group:"Backend", items:["Node.js", "Express", "Postgres", "MongoDB"]},
  {group:"Cloud/Infra", items:["AWS", "Docker", "CI/CD"]},
];

export default function Skills(){
  return (
    <section id="skills" style={{marginBottom:36}}>
      <h2>Skills</h2>
      <div style={{display:"flex", gap:12, marginTop:12}}>
        {skills.map(s=>(
          <div key={s.group} className="card" style={{flex:1}}>
            <h4 style={{marginTop:0}}>{s.group}</h4>
            <ul style={{color:"var(--muted)"}}>
              {s.items.map(i=> <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
