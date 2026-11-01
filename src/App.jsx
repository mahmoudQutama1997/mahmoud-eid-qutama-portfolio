import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Code2,
  Github, Linkedin, Mail, Menu, X, Layers3, Cpu, Sparkles,
  ExternalLink, MapPin, Download, Send, BriefcaseBusiness
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Saned Platform',
    type: 'Full-Stack Web Application',
    description: 'A digital platform concept focused on organizing aid-related workflows and making service access clearer and more manageable.',
    stack: ['React', 'Django', 'REST API', 'PostgreSQL'],
    icon: Layers3,
    color: 'blue',
    link: 'https://github.com/mahmoudQutama1997',
  },
  {
    number: '02',
    name: 'Doctor Booking',
    type: 'Web Application',
    description: 'A booking experience designed to connect patients with healthcare services through a clear and practical interface.',
    stack: ['React', 'Python', 'Django', 'Web'],
    icon: BriefcaseBusiness,
    color: 'violet',
    link: 'https://github.com/mahmoudQutama1997',
  },
  {
    number: '03',
    name: 'EduSupport AI',
    type: 'AI-Powered Education Concept',
    description: 'An education support system concept that helps parents submit student-related concerns and organize support requests.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'AI'],
    icon: BrainCircuit,
    color: 'cyan',
    link: 'https://github.com/mahmoudQutama1997',
  },
  {
    number: '04',
    name: 'Image Classification',
    type: 'Deep Learning Experiment',
    description: 'A hands-on convolutional neural network project exploring how image data can be learned and classified into cats and dogs.',
    stack: ['Python', 'PyTorch', 'CNN', 'Computer Vision'],
    icon: Cpu,
    color: 'orange',
    link: 'https://github.com/mahmoudQutama1997',
  },
]

const skills = [
  { title: 'Frontend', items: 'React · Next.js · JavaScript · HTML · CSS' },
  { title: 'Backend', items: 'Python · Django · Node.js · Express · REST APIs' },
  { title: 'Data & AI', items: 'Python · NumPy · Pandas · scikit-learn · PyTorch' },
  { title: 'Tools', items: 'Git · GitHub · PostgreSQL · VS Code · MATLAB' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const email = 'mahmudqutami19@gmail.com' // Replace with your preferred public email.
  const github = 'https://github.com/mahmoudQutama1997'
  const linkedin = 'https://www.linkedin.com/' // Replace with your LinkedIn profile URL.

  const closeMenu = () => setMenuOpen(false)
  const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']]

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">M<span>.</span></span><span>MAHMOUD<span className="brand-muted"> QUTAMA</span></span></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
              I build digital<br /><span className="gradient-text">things that matter.</span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>
              I'm <strong>Mahmoud Eid Qutama</strong> — a Mechatronics Engineer and Full-Stack Developer exploring the power of Applied AI to turn real-world challenges into useful digital experiences.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={17} /></a>
            </motion.div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-line" /><span className="location"><MapPin size={14} /> Ramallah, Palestine</span>
            </div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .2 }}>
            <div className="visual-glow" />
            <div className="portrait-frame">
              <img src="/images/mahmoud.jpg" alt="Mahmoud Eid Qutama" />
              <div className="portrait-overlay" />
            </div>
            <div className="floating-card card-top"><span className="mini-icon"><Code2 size={17} /></span><span><b>Full-Stack</b><small>Development</small></span></div>
            <div className="floating-card card-bottom"><span className="mini-icon purple"><BrainCircuit size={17} /></span><span><b>Applied AI</b><small>Always learning</small></span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <span className="visual-index">01 / 05</span>
          </motion.div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section container" id="about">
          <div className="section-label"><span>01</span> / ABOUT ME</div>
          <div className="about-grid">
            <h2>Engineering mindset.<br /><span className="muted-heading">Developer curiosity.</span></h2>
            <div className="about-text">
              <p className="large-copy">I enjoy connecting engineering thinking with software development — understanding a problem, breaking it down, and building a solution that people can actually use.</p>
              <p>My journey spans web development, school technology support, engineering environments, and hands-on experiments in machine learning and computer vision. I believe the best way to grow is to keep building, keep questioning, and share what I learn.</p>
              <a className="text-link" href="#journey">More about my journey <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="stats-row">
            <div><strong>01</strong><span>Engineering foundation</span></div>
            <div><strong>02</strong><span>Full-stack mindset</span></div>
            <div><strong>03</strong><span>AI-driven curiosity</span></div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <div className="section-label"><span>02</span> / TOOLKIT</div>
            <div className="section-heading"><h2>Tools I use to<br /><span className="muted-heading">make ideas real.</span></h2><p>A growing toolkit across software engineering and applied intelligence. I focus on understanding the fundamentals behind the tools I use.</p></div>
            <div className="skills-grid">
              {skills.map((skill, i) => <motion.div className="skill-card" key={skill.title} whileHover={{ y: -5 }} transition={{ duration: .2 }}><span className="skill-number">0{i + 1}</span><h3>{skill.title}</h3><p>{skill.items}</p><div className="skill-line" /></motion.div>)}
            </div>
          </div>
        </section>

        <section className="projects section container" id="projects">
          <div className="section-label"><span>03</span> / SELECTED WORK</div>
          <div className="section-heading projects-heading"><h2>Built with purpose.<br /><span className="muted-heading">Driven by curiosity.</span></h2><p>A selection of projects and experiments that reflect how I approach problems and learn through building.</p></div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon
              return <motion.article className={`project-card ${project.color}`} key={project.number} whileHover={{ y: -4 }} transition={{ duration: .2 }}>
                <div className="project-top"><span>{project.number} — {project.type}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={19} /></a></div>
                <div className="project-main"><div className="project-icon"><Icon size={28} /></div><div><h3>{project.name}</h3><p>{project.description}</p></div></div>
                <div className="project-bottom"><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" className="project-link">View on GitHub <ExternalLink size={14} /></a></div>
              </motion.article>
            })}
          </div>
          <a className="all-projects" href={github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={17} /></a>
        </section>

        <section className="journey section" id="journey">
          <div className="container">
            <div className="section-label"><span>04</span> / THE JOURNEY</div>
            <div className="journey-grid">
              <h2>Curiosity is<br /><span className="muted-heading">part of the process.</span></h2>
              <div className="journey-content">
                <div className="timeline-item"><span className="timeline-dot" /><small>FOUNDATION</small><h3>Mechatronics Engineering</h3><p>Building a foundation in systems thinking, engineering principles, and solving problems across disciplines.</p></div>
                <div className="timeline-item"><span className="timeline-dot" /><small>PROFESSIONAL EXPERIENCE</small><h3>Engineering & Technology</h3><p>Experience in fiber network supervision and practical IT support in an educational environment.</p></div>
                <div className="timeline-item"><span className="timeline-dot" /><small>CONTINUOUS LEARNING</small><h3>Full-Stack Development & Applied AI</h3><p>Building web applications while exploring machine learning, deep learning, and computer vision through practical projects.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section container" id="contact">
          <div className="contact-panel">
            <div className="section-label"><span>05</span> / CONTACT</div>
            <div className="contact-content"><div><h2>Have an idea?<br /><span className="gradient-text">Let's build it.</span></h2><p>I'm open to meaningful opportunities, collaborations, and conversations about technology.</p></div><a className="button button-primary contact-button" href={`mailto:${email}?subject=Let's%20connect`}>Start a conversation <Send size={16} /></a></div>
            <div className="contact-footer"><a href={`mailto:${email}`}><Mail size={16} /> {email}</a><span>Ramallah, Palestine</span></div>
          </div>
        </section>
      </main>

      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">M<span>.</span></span><span>MAHMOUD<span className="brand-muted"> QUTAMA</span></span></a><span>Designed & built with curiosity © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
