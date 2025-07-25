import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Database,
  Globe,
} from "lucide-react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Aaron's Website</span>
          </div>
          <ul className="nav-menu">
            {["Home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section} className="nav-item">
                  <button
                    className={`nav-link ${
                      activeSection === section ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="Home" className="Home">
        <div className="Home-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="Home-title">
              Hi, I'm <span className="highlight">Aaron</span>
            </h1>
            <p className="Home-subtitle">Data Analyst and Software Developer</p>
            <p className="Home-description">
              I'm a new graduate from the University of Toronto where I studied
              Computer Science, Mathematics, and Statistics.
            </p>
            <div className="Home-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button className="btn btn-secondary">
                <Download size={20} />
                Download Resume
              </button>
            </div>
            <div className="Home-socials">
              <a
                href="https://github.com/pix3ls126"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aaron-xiaozhou-liu/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:aaronxiaozhou.liu@gmail.com"
                className="social-link"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="Home-image">
          <motion.div
            className="Home-avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/me.jpg" // Updated path to the image
              alt="Aaron's Profile"
              className="avatar-image"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Hello, my name is Aaron, and I'm a recent graduate from the
                  University of Toronto where I studied Computer Science,
                  Statistics, and Mathematics.
                </p>
                <p>
                  I have a strong pasion for data analysis and software, with
                  experience in building scalable applications and analyzing
                  complex datasets.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying outdoor activities.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-icon">
                  <Code size={32} />
                </div>
                <h3>Frontend</h3>
                <div className="skill-list">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">HTML</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-icon">
                  <Database size={32} />
                </div>
                <h3>Backend</h3>
                <div className="skill-list">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-icon">
                  <Globe size={32} />
                </div>
                <h3>Tools & Others</h3>
                <div className="skill-list">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">Scikit-learn</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Power BI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {[
                {
                  title: "Clipboard Manager",
                  description:
                    "A clipboard manager application that allows users to manage their clipboard history, search for past items, and organize them into categories.",
                  tech: ["C", "WINAPI"],
                  image: "/clipboard.png", // Updated path
                  github: "https://github.com/Pix3ls126/Clipboard-Manager",
                },
                {
                  title: "GouGAN",
                  description:
                    "A generative model for converting photographs into impressionist style paintings. Created as a project in the CSC413 Deep Learning and Neural Networks course at the University of Toronto.",
                  tech: ["React", "Jupyter", "PyTorch", "Scikit-learn, Git"],
                  image: "/GouGAN.png", // Updated path
                  github: "https://github.com/Pix3ls126/CSC413-GouGAN",
                },
                {
                  title: "Othello Game AI",
                  description:
                    "An AI-powered Othello game that adapts to player strategies. Developed as part of the CSC384 Artificial Intelligence course at the University of Toronto.",
                  tech: ["Python", "Minimax Algorithm"],
                  image: "/Othello.png", // Updated path
                  github: "https://github.com/Pix3ls126/Othello",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="project-image">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                    ) : (
                      <div className="project-placeholder">
                        <Palette size={40} />
                      </div>
                    )}
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={20} />
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's work together!</h3>
                <p>
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology.
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <Mail size={20} />
                    <a
                      href="mailto:aaronxiaozhou.liu@gmail.com"
                      className="contact-link"
                    >
                      aaronxiaozhou.liu@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <Github size={20} />
                    <a
                      href="https://github.com/pix3ls126"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      github.com/pix3ls126
                    </a>
                  </div>
                  <div className="contact-item">
                    <Linkedin size={20} />
                    <a
                      href="https://linkedin.com/in/aaron-xiaozhou-liu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      linkedin.com/in/aaron-xiaozhou-liu/
                    </a>
                  </div>
                </div>
              </div>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Aaron. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
