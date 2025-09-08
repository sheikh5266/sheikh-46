import { useEffect } from "react";
import { Download, ArrowLeft, BookOpen, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/sheikh-momin-new-headshot.png";
import { AnimatedDesk } from "@/components/ui/animated-illustrations";

const Resume = () => {
  useEffect(() => {
    // Smooth reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Nav highlight on scroll
    const sections = [...document.querySelectorAll('main section[id]')];
    const navLinks = [...document.querySelectorAll('.nav a')];
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = '#' + e.target.id;
          navLinks.forEach(a => {
            const element = a as HTMLElement;
            element.style.background = a.getAttribute('href') === id ? 'rgba(255,255,255,0.04)' : '';
            element.style.borderColor = a.getAttribute('href') === id ? 'rgba(255,255,255,0.08)' : 'transparent';
          });
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(section => spy.observe(section));

    return () => {
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  return (
    <div className="resume-container">
      <style>{`
        .resume-container {
          --bg: #0a0f1f;
          --card: #0f162d;
          --muted: #9db0d3;
          --text: #e8eefc;
          --accent: #6aa8ff;
          --accent2: #42ffd2;
          --ring: rgba(106,168,255,0.35);
          
          min-height: 100vh;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
          background: radial-gradient(1200px 800px at 70% -10%, rgba(66,255,210,0.08), transparent 60%),
                      radial-gradient(900px 600px at -10% 10%, rgba(106,168,255,0.1), transparent 60%),
                      var(--bg);
          color: var(--text);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .container {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 24px;
          width: min(1200px, 94vw);
          margin: 28px auto 64px;
        }

        .sidebar {
          position: sticky;
          top: 24px;
          align-self: start;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .main {
          display: grid;
          gap: 24px;
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .video-wrap {
          position: relative;
          aspect-ratio: 4/5;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(60% 40% at 50% 0%, rgba(106,168,255,0.12), transparent 60%);
        }

        .animated-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, var(--accent), var(--accent2), var(--accent));
          background-size: 300% 300%;
          animation: gradientShift 6s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .profile-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.1);
          margin: 20px auto;
          object-fit: cover;
          position: relative;
          z-index: 2;
        }

        .profile {
          padding: 20px;
          display: grid;
          gap: 12px;
          text-align: center;
        }

        .name {
          font-size: 1.9rem;
          font-weight: 800;
          letter-spacing: 0.3px;
        }

        .roles {
          font-weight: 600;
          font-size: 0.98rem;
          color: var(--muted);
        }

        .download-btn {
          display: inline-block;
          margin-top: 12px;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 600;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          color: #000;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          transition: transform 160ms ease;
          border: none;
          cursor: pointer;
        }

        .download-btn:hover {
          transform: translateY(-2px);
        }

        .nav {
          display: grid;
          gap: 6px;
          padding: 12px 16px 18px;
        }

        .nav a {
          padding: 12px 14px;
          border-radius: 12px;
          display: block;
          font-weight: 600;
          color: var(--text);
          border: 1px solid transparent;
          transition: transform 160ms ease, background 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
          text-decoration: none;
        }

        .nav a:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
          box-shadow: 0 0 0 6px var(--ring);
          transform: translateY(-1px);
        }

        h2 {
          margin: 0 0 14px;
          font-size: 1.35rem;
          letter-spacing: 0.2px;
        }

        .under {
          position: relative;
          display: inline-block;
        }

        .under::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 500ms ease;
          border-radius: 4px;
        }

        section:target h2 .under::after,
        section:hover h2 .under::after {
          transform: scaleX(1);
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .chip {
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 6px 16px rgba(0,0,0,0.25);
          transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
        }

        .chip:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.22);
        }

        .timeline {
          position: relative;
          padding-left: 22px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 9px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(106,168,255,0.6), rgba(66,255,210,0.4));
        }

        .tl-item {
          position: relative;
          margin: 0 0 18px;
          padding: 12px 14px 12px 18px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
        }

        .tl-item::before {
          content: "";
          position: absolute;
          left: -6px;
          top: 18px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--card);
          border: 2px solid var(--accent);
          box-shadow: 0 0 0 6px rgba(106,168,255,0.25);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 14px;
        }

        .col-6 {
          grid-column: span 6;
        }

        .col-12 {
          grid-column: span 12;
        }

        .project {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          min-height: 160px;
          padding: 16px;
        }

        .project h3 {
          margin: 0 0 6px;
        }

        .project p {
          margin: 0;
          color: var(--muted);
        }

        .reveal {
          opacity: 0;
          transform: translateY(12px) scale(0.99);
          filter: blur(1px);
        }

        .reveal.in {
          opacity: 1;
          transform: none;
          filter: none;
          transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease;
        }

        footer {
          text-align: center;
          opacity: 0.8;
          font-size: 0.9rem;
          padding: 24px 0 10px;
        }

        .back-btn {
          position: fixed;
          top: 24px;
          left: 24px;
          z-index: 1000;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--text);
          padding: 12px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        @media (max-width: 980px) {
          .container {
            grid-template-columns: 1fr;
          }
          .video-wrap {
            aspect-ratio: 16/9;
          }
          .back-btn {
            position: relative;
            top: 0;
            left: 0;
            margin-bottom: 20px;
          }
        }
      `}</style>

      <Button 
        asChild
        className="back-btn"
        variant="ghost"
      >
        <Link to="/">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Portfolio
        </Link>
      </Button>

      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="video-wrap">
            <div className="animated-bg"></div>
            <div className="video-overlay"></div>
            <img src={profileImage} alt="Sheikh Momin" className="profile-img" />
          </div>
          <div className="profile">
            <div className="name">Sheikh Momin</div>
            <div className="roles">Digital Marketer · Web Developer · Video Editor · Motion & Graphic Designer</div>
            <button 
              className="download-btn"
              onClick={() => {
                window.open('https://drive.google.com/file/d/15_JAFOG22pTumEg1dk5SvRJ-Wt5iqwx5/view?usp=drivesdk', '_blank');
              }}
            >
              <Download size={16} style={{ marginRight: '8px', display: 'inline' }} />
              Download Resume (PDF)
            </button>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="main">
          {/* Animated Desk Illustration */}
          <div className="card reveal">
            <div className="flex justify-center mb-4">
              <AnimatedDesk className="w-48 h-32" />
            </div>
          </div>
          
          <section id="about" className="card reveal">
            <h2><span className="under">About</span> <BookOpen className="inline-block ml-2 h-5 w-5 text-mint icon-bounce" /></h2>
            <p>
              Versatile creative professional with expertise in <strong>Digital Marketing</strong>, <strong>Web Development</strong>, <strong>Video Editing</strong>, and <strong>Motion & Graphic Design</strong>. 
              Skilled at blending technical knowledge with artistic vision to deliver engaging websites, impactful campaigns, and visually compelling content. 
              Passionate about creating digital solutions that elevate brands and connect with audiences.
            </p>
          </section>

          <section id="skills" className="card reveal">
            <h2><span className="under">Core Skills</span> <Award className="inline-block ml-2 h-5 w-5 text-mint icon-pulse" /></h2>
            <div className="chips">
              {[
                { skill: 'Web Development', percentage: 95 },
                { skill: 'Meta Ad Management', percentage: 90 },
                { skill: 'Video Editing', percentage: 95 },
                { skill: 'Graphic Design', percentage: 88 },
                { skill: '2D Illustration', percentage: 85 },
                { skill: 'Motion Graphics', percentage: 90 }
              ].map((item, index) => (
                <div key={item.skill} className="w-full mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm">{item.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ 
                        width: `${item.percentage}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="chips mt-4">
                {['HTML · CSS · JS', 'React · APIs', 'Premiere Pro', 'After Effects', 'Photoshop · Illustrator', 'Digital Marketing', 'Content Creation'].map((chip, index) => (
                  <span key={chip} className="chip" style={{ animationDelay: `${index * 0.1}s` }}>{chip}</span>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="card reveal">
            <h2><span className="under">Experience</span> <Briefcase className="inline-block ml-2 h-5 w-5 text-mint icon-rotate" /></h2>
            <div className="timeline">
              <div className="tl-item" style={{ animationDelay: '0.1s' }}>
                <strong>Meta Ad Manager, Motion Graphic Designer, Web Developer</strong> — Remote Work · 2024 — Present
                <div style={{ color: 'var(--muted)' }}>Remotely managing Meta advertising campaigns, creating motion graphics, and developing web solutions for diverse clients.</div>
              </div>
              <div className="tl-item" style={{ animationDelay: '0.2s' }}>
                <strong>Professional Video Editor</strong> — DSB POD · 2024 — Present
                <div style={{ color: 'var(--muted)' }}>Creates videos for motion graphic animation and ad management, specializing in compelling visual content for marketing campaigns.</div>
              </div>
            </div>
          </section>

          <section id="projects" className="card reveal">
            <h2><span className="under">Featured Projects</span></h2>
            <div className="grid">
              {[
                { title: 'Marketing Funnel Revamp', desc: 'Redesigned funnel pages and content strategy; improved CTR and conversions with A/B testing and analytics insights.' },
                { title: 'Responsive Portfolio Website', desc: 'Built a fast, accessible, SEO-friendly site; integrated contact forms and CMS for easy content updates.' },
                { title: 'Product Launch Video', desc: 'Scripted, edited, and animated a launch video series tailored for YouTube, Reels, and TikTok formats.' },
                { title: 'Motion Branding Pack', desc: 'Designed logo stings, lower-thirds, and titles in After Effects for a cohesive motion identity.' }
              ].map((project, index) => (
                <article key={project.title} className="project col-6" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="card reveal">
            <h2><span className="under">Education</span> <BookOpen className="inline-block ml-2 h-5 w-5 text-mint icon-bounce" /></h2>
            <div className="timeline">
              <div className="tl-item" style={{ animationDelay: '0.1s' }}>
                <strong>Currently Studying</strong> — Dhaka University
                <div style={{ color: 'var(--muted)' }}>Currently studying at Dhaka University, building strong foundations in marketing, design, and technology.</div>
              </div>
              <div className="tl-item" style={{ animationDelay: '0.2s' }}>
                <strong>H.S.C</strong> — Hazaribag Govt. College
                <div style={{ color: 'var(--muted)' }}>Completed Higher Secondary Certificate with strong academic performance.</div>
              </div>
            </div>
          </section>

          <section id="contact" className="card reveal">
            <h2><span className="under">Contact</span></h2>
            <div className="grid">
              <div className="col-12">
                <p>Email: <a href="mailto:sheikhmomin431@gmail.com">sheikhmomin431@gmail.com</a></p>
                <p>Phone: <a href="tel:+8801540567946">+880-154-056-7946</a></p>
                <p>Website: <a href="http://www.sheikhmomin.com/" target="_blank" rel="noreferrer noopener">www.sheikhmomin.com</a></p>
                <p>Address: 23/8 West Nabinagar, Kamrangirchar, Dhaka</p>
              </div>
            </div>
          </section>

          <footer className="reveal">
            © {new Date().getFullYear()} Sheikh Momin — All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Resume;