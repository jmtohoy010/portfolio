import React, { useState } from 'react';
import logo from './me.jpg';
import { FaFacebook, FaInstagram, FaGithub, FaProjectDiagram, FaCertificate, FaUserCheck } from "react-icons/fa";
import './App.css';

const scrollWithFade = (e, targetId) => {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (!target) return;
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    sec.classList.remove('fade-in', 'slide-in', 'zoom-in', 'flip-in');
  });
  let effect = 'fade-in';
  if (targetId === 'home') effect = 'zoom-in';
  else if (targetId === 'about') effect = 'slide-in';
  else if (targetId === 'education') effect = 'flip-in';
  else if (targetId === 'experience') effect = 'fade-in';
  target.classList.add(effect);
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 112;
  const computedStyle = window.getComputedStyle(target);
  const marginTop = parseInt(computedStyle.marginTop) || 0;
  const yOffset = -headerHeight - marginTop + 1;
  const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
  setTimeout(() => target.classList.remove(effect), 700);
};

const educationData = [
  {
    name: 'Learn & Explore Montessori School Inc.',
    degree: 'Junior High School',
    years: '2016 - 2020',
    location: '#8 Gen. Espino St., Taguig City',
    logo: require('./lems.jpg'),
  },
  {
    name: 'Asia Pacific College',
    degree: 'Senior High School',
    years: '2020 - 2022',
    location: '3 Humabon, Makati',
    logo: require('./apc.jpeg'),
  },
  {
    name: 'Technological Institute of the Philippines',
    degree: 'Bachelor of Science in Computer Engineering',
    years: '2022 - Present',
    location: '1338 Arlegui St., Quiapo, Manila',
    logo: require('./tip.jpg'),
  },
];

const Portfolio = () => {
  const [openCard, setOpenCard] = useState(null);
  const [openExpCard, setOpenExpCard] = useState(null);
  const [eduIndex, setEduIndex] = useState(0);
  const prevEdu = () => setEduIndex((i) => (i === 0 ? educationData.length - 1 : i - 1));
  const nextEdu = () => setEduIndex((i) => (i === educationData.length - 1 ? 0 : i + 1));
  const handleCardClick = (card) => {
    setOpenCard(openCard === card ? null : card);
  };
  const handleExpCardClick = (card) => {
    setOpenExpCard(openExpCard === card ? null : card);
  };
  return (
    <div>
      <header>
        <a href="#" className="logo">John Michael Ocampo</a>
        <nav>
          <a href="#" className="active" onClick={e => scrollWithFade(e, 'home')}>Home</a>
          <a href="#about" onClick={e => scrollWithFade(e, 'about')}>About</a>
          <a href="#education" onClick={e => scrollWithFade(e, 'education')}>Education</a>
          <a href="#experience" onClick={e => scrollWithFade(e, 'experience')}>Experience</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-img">
          <img src={logo} alt="me" />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span>Kael</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>
            A dedicated and hardworking Computer Engineering student at the
            Technological Institute of the Philippines, eager to explore and enhance the skills I’ve developed through my academic journey. 
            I aim to apply my knowledge in real-world scenarios to gain valuable experience in the information technology field.
          </p>
          <div className="social-icons">
            <a href="#" onClick={e => { e.preventDefault(); window.open('https://github.com/Kaels10', '_blank', 'noopener,noreferrer'); }}><FaGithub /></a>
            <a href="#" onClick={e => { e.preventDefault(); window.open('https://www.facebook.com/jm.ocampo.7/', '_blank', 'noopener,noreferrer'); }}><FaFacebook /></a>
            <a href="#" onClick={e => { e.preventDefault(); window.open('https://www.instagram.com/kaelszzz/', '_blank', 'noopener,noreferrer'); }}><FaInstagram /></a>
          </div>
          <a href="#" className="btn" onClick={e => { e.preventDefault(); window.open('https://www.linkedin.com/in/john-michael-ocampo/', '_blank', 'noopener,noreferrer'); }}>Hire me</a>
        </div>
      </section>

      <section id="about" className="home">
        <div className="home-content">
          <h1>About <span>Me</span></h1>
          <h3 className="typing-text">Who am I?</h3>
          <p>I'm <strong>John Michael “Kael” Ocampo</strong>, a passionate Computer Engineering student from the 
          Technological Institute of the Philippines. I'm driven by curiosity and a desire to innovate in the fields of technology and software development. 
          Beyond academics, I enjoy working on personal projects, learning new programming languages, and staying up to date with tech trends. 
          I’m always looking for ways to improve and grow both professionally and personally.</p>

          <div className="about-grid">
            <div className={`hobbies about-card${openCard === 'hobbies' ? ' open' : ''}`} onClick={() => handleCardClick('hobbies')} style={{cursor:'pointer'}}>
              <h3>Hobbies</h3>
              {openCard === 'hobbies' && (
                <ul>
                  <li>🎮 Playing video games</li>
                  <li>💻 Coding and building mini-projects</li>
                  <li>🎧 Listening to music</li>
                  <li>📚 Reading tech articles</li>
                  <li>🧠 Learning new technologies</li>
                </ul>
              )}
            </div>

            <div className={`skills about-card${openCard === 'skills' ? ' open' : ''}`} onClick={() => handleCardClick('skills')} style={{cursor:'pointer'}}>
              <h3>Skills</h3>
              {openCard === 'skills' && (
                <ul>
                  <li>🖥️ Web Development (HTML, CSS, JavaScript)</li>
                  <li>⚙️ Arduino and Microcontroller Programming</li>
                  <li>🛠️ Problem Solving & Debugging</li>
                  <li>✍️ Technical Writing</li>
                  <li>📈 Version Control (Git)</li>
                </ul>
              )}
            </div>

            <div className={`contact-info about-card${openCard === 'contact' ? ' open' : ''}`} onClick={() => handleCardClick('contact')} style={{cursor:'pointer'}}>
              <h3>Contacts</h3>
              {openCard === 'contact' && (
                <div>
                  <p><strong>📍 Address:</strong> 08 General Aguinaldo Street Zone 6 South Signal Taguig City</p>
                  <p><strong>📧 Email:</strong> <a href="mailto:jmocampo120@gmail.com">jmocampo120@gmail.com</a></p>
                  <p><strong>📱 Phone:</strong> +63 928 809 8741</p>
                </div>
              )}
            </div>
          </div>

          <a href="resume.pdf" download className="btn download-btn">Download Resume</a>
        </div>
      </section>

      <section id="education" className="home">
        <div className="home-content">
          <h1><span>Education</span></h1>

          {/* Education Carousel Start */}
          <div className="edu-carousel">
            <button className="edu-arrow left" onClick={prevEdu} aria-label="Previous School">&#8592;</button>
            <div className="edu-card">
              <img src={educationData[eduIndex].logo} alt={educationData[eduIndex].name + ' logo'} className="edu-logo" />
              <h3>{educationData[eduIndex].name}</h3>
              <p><strong>{educationData[eduIndex].degree}</strong> | {educationData[eduIndex].years}</p>
              <p>📍 {educationData[eduIndex].location}</p>
            </div>
            <button className="edu-arrow right" onClick={nextEdu} aria-label="Next School">&#8594;</button>
          </div>
          {/* Education Carousel End */}
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="experience-content">
          <h1><span>Experience</span></h1>
          <div className="about-grid">
            <div className={`exp-list about-card${openExpCard === 'projects' ? ' open' : ''}`} onClick={() => handleExpCardClick('projects')} style={{cursor:'pointer'}}>
              <h3><FaProjectDiagram style={{marginRight:'8px'}}/>Projects & Roles</h3>
              <div className="exp-list-content about-card-content">
                {openExpCard === 'projects' && (
                  <ul>
                    <li>
                      <strong>Website Creation Project</strong><br />
                      Technological Institute of the Philippines | Jan. 2024 - May. 2024<br />
                      📍 Quiapo, Manila
                    </li>
                    <li>
                      <strong>Computer Networking</strong><br />
                      Technological Institute of the Philippines | Jan. 2024 - May. 2024<br />
                      📍 Quiapo, Manila
                    </li>
                    <li>
                      <strong>Cybersecurity</strong><br />
                      Technological Institute of the Philippines | Jan. 2024 - May. 2024<br />
                      📍 Quiapo, Manila
                    </li>
                    <li>
                      <strong>Database Creation</strong><br />
                      Technological Institute of the Philippines | Aug. 2023 - Dec. 2023<br />
                      📍 Quiapo, Manila
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className={`qualifications about-card${openExpCard === 'qualifications' ? ' open' : ''}`} onClick={() => handleExpCardClick('qualifications')} style={{cursor:'pointer'}}>
              <h3><FaUserCheck style={{marginRight:'8px'}}/>Qualifications</h3>
              <div className="qualifications-content about-card-content">
                {openExpCard === 'qualifications' && (
                  <ul>
                    <li>✔️ Excellent analytical skills with the ability to analyze situations accurately and effectively</li>
                    <li>✔️ Intermediate skills in using technology to enhance data and information management</li>
                    <li>✔️ Excellent Verbal and Written Communication Skills both in English and Filipino</li>
                    <li>✔️ Proven leadership and organizational abilities and are able to lead others in difficult situations</li>
                    <li>✔️ Attention to detail and good organizational skills</li>
                    <li>✔️ Able to work as part of a team and contribute to team projects</li>
                    <li>✔️ Knowledgeable in various computer applications such as Microsoft applications (Word, PowerPoint, Excel, etc.), CAD (Computer Aided Drafting)</li>
                    <li>✔️ Knowledgeable in different programming languages such as C++, Python, JavaScript, HTML & CSS</li>
                  </ul>
                )}
              </div>
            </div>
            <div className={`certificates about-card${openExpCard === 'certificates' ? ' open' : ''}`} onClick={() => handleExpCardClick('certificates')} style={{cursor:'pointer'}}>
              <h3><FaCertificate style={{marginRight:'8px'}}/>Certificates</h3>
              <div className="certificates-content about-card-content">
                {openExpCard === 'certificates' && (
                  <ul>
                    <li>📜 Introduction in Computer Networks<br />Cisco | May 17, 2024</li>
                    <li>📜 Cybersecurity Essentials<br />Cisco | May 08, 2024</li>
                    <li>🏅 VPAA Lister<br />Technological Institute of the Philippines | 2022 - 2023</li>
                    <li>🎓 Senior High School STEM with Honors Graduate<br />Asia Pacific College | 2020 - 2022</li>
                    <li>🎓 Junior High School with Honors Graduate<br />Learn & Explore Montessori School Inc. | 2016 - 2020</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
