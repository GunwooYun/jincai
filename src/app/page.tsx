import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            JINCAI <span className="logo-accent">TOUR</span>
          </div>
          <nav className="nav">
            <Link href="#home" className="nav-link">Home</Link>
            <Link href="#about" className="nav-link">About Us</Link>
            <Link href="#services" className="nav-link">Our Services</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <select className="lang-select" defaultValue="kr">
              <option value="kr">KR</option>
              <option value="cn">CN</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <img 
            src="/hero_bg.png" 
            alt="Seoul cityscape with traditional palace" 
            className="hero-bg" 
          />
          <div className="hero-overlay"></div>
          <div className="container relative z-10">
            <div className="hero-content">
              <span className="hero-tagline">금채여행사</span>
              <h1 className="hero-title">Discover the True Essence of Korea</h1>
              <p className="hero-desc">
                Your premier inbound travel partner for Chinese tourists. Experience Korea's world-class medical facilities, vibrant K-Pop culture, and serene traditions with unparalleled luxury and comfort.
              </p>
              <div className="hero-buttons">
                <Link href="#services" className="btn btn-primary">Explore Packages</Link>
                <Link href="#contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">Why Choose Jincai Tour?</h2>
            <p className="section-desc">
              We specialize in curating bespoke travel experiences for Chinese visitors to Korea. From medical tourism to cultural immersion, our dedicated team ensures every aspect of your journey is flawless.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3 className="feature-title">Premium Service</h3>
                <p className="feature-text">
                  Enjoy VIP treatment with our fleet of luxury vehicles, private guides, and access to exclusive locations across South Korea.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌏</div>
                <h3 className="feature-title">Bilingual Experts</h3>
                <p className="feature-text">
                  Our fully fluent Chinese-Korean speaking guides and coordinators provide seamless communication and deep cultural insights.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3 className="feature-title">Trusted Network</h3>
                <p className="feature-text">
                  We have established direct partnerships with top-tier hospitals, entertainment agencies, and premium hospitality providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section packages-section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Our Signature Services</h2>
            <p className="section-desc" style={{ textAlign: 'center' }}>
              Tailored itineraries designed to showcase the very best of what South Korea has to offer.
            </p>

            <div className="packages-grid">
              <div className="pkg-card">
                <img src="/service_medical.png" alt="Medical Tourism" className="pkg-img" />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">Medical & Wellness</h3>
                  <p className="pkg-desc">Access Korea's world-renowned cosmetic surgery, dermatology clinics, and comprehensive health checkups with dedicated VIP interpreters.</p>
                </div>
              </div>
              
              <div className="pkg-card">
                <img src="/service_kpop.png" alt="K-Pop Tour" className="pkg-img" />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">K-Pop & Entertainment</h3>
                  <p className="pkg-desc">Exclusive concert tickets, agency tours, professional idol makeover experiences, and visits to iconic K-drama filming locations.</p>
                </div>
              </div>
              
              <div className="pkg-card">
                <img src="/service_culture.png" alt="Cultural Tour" className="pkg-img" />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">Heritage & Culture</h3>
                  <p className="pkg-desc">Immerse yourself in traditional Hanok stays, royal palace tours with premium Hanbok rentals, and authentic Korean culinary experiences.</p>
                </div>
              </div>

              <div className="pkg-card">
                <img src="/hero_bg.png" alt="Corporate Travel" className="pkg-img" style={{ objectPosition: 'bottom' }} />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">MICE & Corporate</h3>
                  <p className="pkg-desc">Comprehensive solutions for corporate meetings, incentive travel, conferences, and exhibitions in South Korea.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div>
              <div className="stat-number">50k+</div>
              <div className="stat-label">Happy Tourists</div>
            </div>
            <div>
              <div className="stat-number">120+</div>
              <div className="stat-label">Partner Clinics</div>
            </div>
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo">
                JINCAI <span className="logo-accent">TOUR</span>
              </div>
              <p>금채여행사 - Building bridges between China and South Korea through exceptional travel experiences and unparalleled service quality.</p>
            </div>
            
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="#home" className="footer-link">Home</Link></li>
                <li><Link href="#about" className="footer-link">About Us</Link></li>
                <li><Link href="#services" className="footer-link">Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Medical Tourism</a></li>
                <li><a href="#" className="footer-link">K-Pop Tours</a></li>
                <li><a href="#" className="footer-link">Cultural Experiences</a></li>
                <li><a href="#" className="footer-link">Corporate Travel</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-links">
                <li className="footer-link">Seoul, South Korea</li>
                <li className="footer-link">contact@jincaitour.com</li>
                <li className="footer-link">+82 2 1234 5678</li>
                <li className="footer-link">WeChat: JincaiTour_KR</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>&copy; 2026 Jincai Tour (금채여행사). All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
