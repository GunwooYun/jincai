"use client";

import React, { useState } from "react";
import Link from "next/link";

const translations = {
  en: {
    nav: { home: "Home", about: "About Us", services: "Our Services", contact: "Contact" },
    hero: {
      tagline: "JINCAI TOUR",
      title: "Discover the True Essence of Korea",
      desc: "Your premier inbound travel partner for Chinese tourists. Experience Korea's world-class medical facilities, vibrant K-Pop culture, and serene traditions with unparalleled luxury and comfort.",
      explore: "Explore Packages",
      contact: "Contact Us"
    },
    about: {
      title: "Why Choose Jincai Tour?",
      desc: "We specialize in curating bespoke travel experiences for visitors to Korea. From medical tourism to cultural immersion, our dedicated team ensures every aspect of your journey is flawless.",
      f1_title: "Premium Service",
      f1_desc: "Enjoy VIP treatment with our fleet of luxury vehicles, private guides, and access to exclusive locations across South Korea.",
      f2_title: "Bilingual Experts",
      f2_desc: "Our fully fluent Chinese-Korean speaking guides and coordinators provide seamless communication and deep cultural insights.",
      f3_title: "Trusted Network",
      f3_desc: "We have established direct partnerships with top-tier hospitals, entertainment agencies, and premium hospitality providers."
    },
    services: {
      title: "Our Signature Services",
      desc: "Tailored itineraries designed to showcase the very best of what South Korea has to offer.",
      s1_title: "Medical & Wellness",
      s1_desc: "Access Korea's world-renowned cosmetic surgery, dermatology clinics, and comprehensive health checkups with dedicated VIP interpreters.",
      s2_title: "K-Pop & Entertainment",
      s2_desc: "Exclusive concert tickets, agency tours, professional idol makeover experiences, and visits to iconic K-drama filming locations.",
      s3_title: "Heritage & Culture",
      s3_desc: "Immerse yourself in traditional Hanok stays, royal palace tours with premium Hanbok rentals, and authentic Korean culinary experiences.",
      s4_title: "MICE & Corporate",
      s4_desc: "Comprehensive solutions for corporate meetings, incentive travel, conferences, and exhibitions in South Korea."
    },
    stats: {
      s1: "Years Experience",
      s2: "Happy Tourists",
      s3: "Partner Clinics",
      s4: "Client Satisfaction"
    },
    footer: {
      about: "Building bridges between China and South Korea through exceptional travel experiences and unparalleled service quality.",
      quick: "Quick Links",
      services: "Services",
      contact: "Contact Us"
    }
  },
  kr: {
    nav: { home: "홈", about: "회사 소개", services: "주요 서비스", contact: "연락처" },
    hero: {
      tagline: "금채여행사",
      title: "진정한 한국의 아름다움을 발견하세요",
      desc: "중화권 및 글로벌 관광객을 위한 최고의 인바운드 여행 파트너. 세계 최고 수준의 의료 시설, 생동감 넘치는 K-Pop 문화, 그리고 고즈넉한 전통 체험을 럭셔리하게 즐겨보세요.",
      explore: "패키지 살펴보기",
      contact: "문의하기"
    },
    about: {
      title: "왜 금채여행사인가요?",
      desc: "한국을 방문하는 외국인 관광객을 위한 맞춤형 여행을 기획합니다. 의료 관광부터 문화 체험까지, 전담 팀이 결점 없는 완벽한 여정을 보장합니다.",
      f1_title: "프리미엄 서비스",
      f1_desc: "럭셔리 차량, 전담 가이드 및 VIP 대우를 통해 한국 전역의 특별한 장소들을 프라이빗하게 경험하실 수 있습니다.",
      f2_title: "이중언어 전문가",
      f2_desc: "한국어와 중국어에 능통한 전문 가이드와 코디네이터가 원활한 소통과 깊이 있는 문화 해설을 제공합니다.",
      f3_title: "신뢰할 수 있는 네트워크",
      f3_desc: "최고 수준의 병원, 엔터테인먼트 기획사, 프리미엄 숙박 및 서비스 제공업체와 직접 제휴하고 있습니다."
    },
    services: {
      title: "시그니처 서비스",
      desc: "한국의 진수를 보여드리기 위해 세심하게 설계된 맞춤형 여행 일정입니다.",
      s1_title: "의료 및 웰니스",
      s1_desc: "세계 최고 수준의 성형외과, 피부과 및 종합 건강검진을 전담 VIP 통역사와 함께 안전하게 이용하세요.",
      s2_title: "K-Pop 및 엔터테인먼트",
      s2_desc: "독점 콘서트 티켓, 기획사 투어, 전문 아이돌 메이크업 체험 및 유명 K-드라마 촬영지 방문을 즐겨보세요.",
      s3_title: "역사 및 문화 체험",
      s3_desc: "전통 한옥 숙박, 프리미엄 한복을 입고 거니는 궁궐 투어, 정통 한식 문화를 깊이 있게 경험하세요.",
      s4_title: "MICE 및 기업 연수",
      s4_desc: "기업 회의, 포상 휴가, 컨퍼런스, 전시회 참관 등 성공적인 비즈니스를 위한 종합 솔루션을 제공합니다."
    },
    stats: {
      s1: "년 이상의 경력",
      s2: "명의 만족한 고객",
      s3: "곳의 제휴 병원",
      s4: "고객 만족도"
    },
    footer: {
      about: "금채여행사 - 최상의 여행 경험을 통해 한국과 중국, 나아가 세계를 연결합니다.",
      quick: "빠른 링크",
      services: "서비스",
      contact: "연락처"
    }
  },
  cn: {
    nav: { home: "首页", about: "关于我们", services: "我们的服务", contact: "联系我们" },
    hero: {
      tagline: "锦彩旅行社",
      title: "发现韩国的真正魅力",
      desc: "为您量身定制的韩国入境旅游首选合作伙伴。在无与伦比的奢华与舒适中，体验世界顶级的医疗设施、充满活力的K-Pop文化以及宁静的传统体验。",
      explore: "探索套餐",
      contact: "联系我们"
    },
    about: {
      title: "为什么选择锦彩旅行社？",
      desc: "我们专门为访韩游客精心策划定制旅行体验。从医疗旅游到文化沉浸，我们的专业团队确保您旅程的每一个细节都完美无瑕。",
      f1_title: "高端服务",
      f1_desc: "为您提供豪华车辆、私人导游以及专属景点的VIP待遇，尊享非凡体验。",
      f2_title: "双语专家",
      f2_desc: "我们精通中韩双语的导游和协调员为您提供无障碍的沟通与深度的文化讲解。",
      f3_title: "值得信赖的网络",
      f3_desc: "我们与韩国顶尖医院、娱乐公司以及高端酒店等建立了直接且稳固的合作关系。"
    },
    services: {
      title: "核心服务",
      desc: "旨在向您展示韩国精华的定制旅游行程。",
      s1_title: "医疗与健康",
      s1_desc: "在专属VIP翻译的陪同下，体验韩国世界闻名的整形外科、皮肤科以及全面的健康体检服务。",
      s2_title: "K-Pop与娱乐",
      s2_desc: "独家演唱会门票、经纪公司参观、专业的偶像化妆体验，以及经典韩剧拍摄地打卡。",
      s3_title: "历史与文化",
      s3_desc: "沉浸在传统韩屋住宿、穿着高级韩服游览王宫，以及品尝正宗的韩国饮食文化之中。",
      s4_title: "MICE与企业旅行",
      s4_desc: "为企业会议、奖励旅游、大型会议以及展览等提供全面的综合解决方案。"
    },
    stats: {
      s1: "年以上经验",
      s2: "名满意游客",
      s3: "家合作医院",
      s4: "客户满意度"
    },
    footer: {
      about: "锦彩旅行社 - 通过卓越的旅行体验和无与伦比的服务质量，搭建中韩交流的桥梁。",
      quick: "快速链接",
      services: "服务",
      contact: "联系我们"
    }
  }
};

type LangType = "en" | "kr" | "cn";

export default function Home() {
  const [lang, setLang] = useState<LangType>("kr");
  const t = translations[lang];

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            {lang === 'cn' ? '锦彩' : 'JINCAI'} <span className="logo-accent">TOUR</span>
          </div>
          <nav className="nav">
            <Link href="#home" className="nav-link">{t.nav.home}</Link>
            <Link href="#about" className="nav-link">{t.nav.about}</Link>
            <Link href="#services" className="nav-link">{t.nav.services}</Link>
            <Link href="#contact" className="nav-link">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-4">
            <select 
              className="lang-select" 
              value={lang} 
              onChange={(e) => setLang(e.target.value as LangType)}
            >
              <option value="kr">한국어</option>
              <option value="cn">中文</option>
              <option value="en">English</option>
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
              <span className="hero-tagline">{t.hero.tagline}</span>
              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="hero-desc">{t.hero.desc}</p>
              <div className="hero-buttons">
                <Link href="#services" className="btn btn-primary">{t.hero.explore}</Link>
                <Link href="#contact" className="btn btn-outline">{t.hero.contact}</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="section-desc">{t.about.desc}</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3 className="feature-title">{t.about.f1_title}</h3>
                <p className="feature-text">{t.about.f1_desc}</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌏</div>
                <h3 className="feature-title">{t.about.f2_title}</h3>
                <p className="feature-text">{t.about.f2_desc}</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3 className="feature-title">{t.about.f3_title}</h3>
                <p className="feature-text">{t.about.f3_desc}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section packages-section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>{t.services.title}</h2>
            <p className="section-desc" style={{ textAlign: 'center' }}>{t.services.desc}</p>

            <div className="packages-grid">
              <div className="pkg-card">
                <img src="/service_medical.png" alt="Medical Tourism" className="pkg-img" />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">{t.services.s1_title}</h3>
                  <p className="pkg-desc">{t.services.s1_desc}</p>
                </div>
              </div>
              
              <div className="pkg-card">
                <img src="/service_kpop.png" alt="K-Pop Tour" className="pkg-img" />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">{t.services.s2_title}</h3>
                  <p className="pkg-desc">{t.services.s2_desc}</p>
                </div>
              </div>
              
              <div className="pkg-card">
                <img src="/service_culture.png" alt="Cultural Tour" className="pkg-img" />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">{t.services.s3_title}</h3>
                  <p className="pkg-desc">{t.services.s3_desc}</p>
                </div>
              </div>

              <div className="pkg-card">
                <img src="/hero_bg.png" alt="Corporate Travel" className="pkg-img" style={{ objectPosition: 'bottom' }} />
                <div className="pkg-overlay">
                  <h3 className="pkg-title">{t.services.s4_title}</h3>
                  <p className="pkg-desc">{t.services.s4_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <div>
              <div className="stat-number">10+</div>
              <div className="stat-label">{t.stats.s1}</div>
            </div>
            <div>
              <div className="stat-number">50k+</div>
              <div className="stat-label">{t.stats.s2}</div>
            </div>
            <div>
              <div className="stat-number">120+</div>
              <div className="stat-label">{t.stats.s3}</div>
            </div>
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">{t.stats.s4}</div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo">
              {lang === 'cn' ? '锦彩' : 'JINCAI'} <span className="logo-accent">TOUR</span>
              </div>
              <p>{t.footer.about}</p>
            </div>
            
            <div>
              <h4 className="footer-heading">{t.footer.quick}</h4>
              <ul className="footer-links">
                <li><Link href="#home" className="footer-link">{t.nav.home}</Link></li>
                <li><Link href="#about" className="footer-link">{t.nav.about}</Link></li>
                <li><Link href="#services" className="footer-link">{t.nav.services}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer-heading">{t.footer.services}</h4>
              <ul className="footer-links">
                <li><Link href="#services" className="footer-link">{t.services.s1_title}</Link></li>
                <li><Link href="#services" className="footer-link">{t.services.s2_title}</Link></li>
                <li><Link href="#services" className="footer-link">{t.services.s3_title}</Link></li>
                <li><Link href="#services" className="footer-link">{t.services.s4_title}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer-heading">{t.footer.contact}</h4>
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
