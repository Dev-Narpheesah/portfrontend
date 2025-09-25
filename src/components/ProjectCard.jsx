import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({title, description, tech = [], url, repo}) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(2,6,23,0.6)" }}
      className="bg-slate-800/40 p-6 rounded-xl"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t,i)=> (
          <span key={i} className="text-sm text-slate-300/80 bg-slate-700/30 px-2 py-1 rounded">{t}</span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {url && <a className="inline-block px-3 py-2 rounded bg-gradient-to-r from-green-400 to-blue-500 text-slate-900 font-medium" href={url} target="_blank" rel="noreferrer">Live</a>}
        {repo && <a className="text-slate-400 hover:text-slate-100" href={repo} target="_blank" rel="noreferrer">Repo</a>}
      </div>
    </motion.div>
  );
}
