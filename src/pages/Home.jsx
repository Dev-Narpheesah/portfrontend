import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 dark:from-black dark:to-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between mb-10">
          <h4 className="text-lg font-semibold">YourName</h4>
          <nav className="flex items-center gap-6">
            <a className="text-slate-400 hover:text-slate-100" href="#projects">Projects</a>
            <a className="text-slate-400 hover:text-slate-100" href="#experience">Experience</a>
            <a className="text-slate-400 hover:text-slate-100" href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </header>

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
