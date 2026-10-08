import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, Mail, ShieldCheck, Users, Heart, Sparkles } from 'lucide-react';
import './styles.css';

const highlights = [
  { icon: ShieldCheck, title: 'Trusted & Secure', text: 'Your health data, our priority.' },
  { icon: Users, title: 'For Everyone', text: 'Patients, doctors, clinics and more.' },
  { icon: Heart, title: 'Better Access', text: 'Quality healthcare, closer to you.' },
  { icon: Sparkles, title: 'Built for Tomorrow', text: 'Smarter tools. Healthier lives.' },
];

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  const scrollToUpdates = () => {
    document.getElementById('updates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Veadicare home">
          <img src="/assets/img.png" alt="Veadicare" />
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a className="active" href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#updates">Contact</a>
          <button className="nav-cta" onClick={scrollToUpdates}>
            <Mail size={18} strokeWidth={2} />
            Get Notified
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span />A HEALTHIER TOMORROW, TOGETHER</div>
            <h1 id="hero-title">Healthcare,<br /><span>Connected.</span></h1>
            <p className="hero-description">
              We’re building a connected healthcare experience that brings patients,
              doctors, clinics and healthcare services closer together.
            </p>
            <div className="coming-soon">COMING SOON</div>

            <form className="notify-form" id="updates" onSubmit={handleSubmit}>
              <div className="email-field">
                <Mail size={20} aria-hidden="true" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Stay Updated <ArrowRight size={19} />
              </button>
            </form>

            {submitted && (
              <div className="success-message" role="status">
                <Check size={16} /> Thanks. We’ll keep you posted when Veadicare is ready.
              </div>
            )}
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/hero-visual.png" alt="" />
          </div>
        </section>

        <section className="highlights" id="about" aria-label="Veadicare values">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <React.Fragment key={title}>
              <article className="highlight">
                <div className="highlight-icon"><Icon size={27} strokeWidth={2.25} /></div>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
              {index < highlights.length - 1 && <div className="divider" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/assets/logo.png" alt="Veadicare" />
        </div>
        <p>© {new Date().getFullYear()} Veadicare. All rights reserved.</p>
        <div className="socials" aria-label="Social links">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="X">𝕏</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
