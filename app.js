import React from 'react';
import './App.css';

const Header = () => (
  <header>
    <h1>Aakash Maurya</h1>
    <p>📱 +91 7379254601 | 📧 <a href="mailto:aakashmaurya.am2@gmail.com">aakashmaurya.am2@gmail.com</a></p>
    <p>🌐 <a href="https://www.linkedin.com/in/aakash-maurya-/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
  </header>
);

const Summary = () => (
  <section>
    <h2>Summary</h2>
    <p>
      My career path is driven by a profound passion for programming and mathematics, cultivated from my early academic years and advanced through rigorous study in computer science. I seek to leverage my analytical acumen and mathematical expertise in a role where I can make a meaningful impact, striving to excel in an environment that values innovation and technical proficiency.
    </p>
  </section>
);

const Education = () => (
  <section>
    <h2>Education</h2>
    <ul>
      <li>
        <strong>B.Tech (2020-2024)</strong> — Major: Computer Science and Communication, CGPA: 7.59, Minor: Financial Economics (using Data Analytics)
      </li>
      <li>
        <strong>Intermediate (2019-2020)</strong> — J G R SUMIRAN RAM KRIPAL INTER COLLEGE
      </li>
      <li>
        <strong>High School (2012-2017)</strong> — Surya International Academy, CGPA: 10
      </li>
    </ul>
  </section>
);

const Experience = () => (
  <section>
    <h2>Work Experience</h2>
    <div>
      <h3>Business Development Associate</h3>
      <p>Tech Mindsparc Innovation, Hyderabad, India</p>
      <ul>
        <li>Strategic growth planner orchestrates initiatives using comprehensive analysis, foresight, and tactical acumen to drive sustainable business expansion and development.</li>
        <li>Client relationship manager adeptly cultivates and nurtures client partnerships, employing nuanced interpersonal skills to ensure sustained satisfaction and loyalty.</li>
        <li>Proficiently drives revenue through strategic client engagement and sophisticated relationship management, pivotal in fostering growth for leading multinational corporations.</li>
      </ul>
    </div>
    <div>
      <h3>Business Analyst</h3>
      <p>Aakash Krishi Kendre | 2023-2024</p>
      <ul>
        <li>Led rigorous market research and competitive analysis to unearth growth opportunities.</li>
        <li>Crafted and implemented precise sales strategies aligned with market dynamics and consumer insights, catalyzing substantial revenue escalation and market dominance.</li>
        <li>Employed sophisticated analytics and financial modeling to refine pricing strategies and product portfolios.</li>
        <li>Delivered succinct, high-impact reports and presentations to senior leadership, empowering informed decision-making and cultivating a culture of sales excellence and profitability optimization.</li>
      </ul>
    </div>
  </section>
);

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>Trading Setup:</strong> Engineered a comprehensive three-phase algorithmic trading setup leveraging Interactive Brokers data; achieved a 15% increase in trading efficiency and reduced latency by 20%, enhancing overall profitability.
      </li>
      <li>
        <strong>Backtester Module using OOPs:</strong> Developed and deployed a comprehensive backtester module using OOP and Python, incorporating slippage, risk, paper trading, and size optimization; tested on Nadaraya Watson envelope and deployed on HuggingFace.
      </li>
    </ul>
  </section>
);

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <ul>
      <li><strong>Technical:</strong> Data Structures and Algorithms, OOP, Machine Learning, AI, and Data Science</li>
      <li><strong>Languages:</strong> C++, Java, SQL, MS Office, Python, Golang</li>
      <li><strong>Tools:</strong> MS Office, Power BI, Tableau</li>
      <li><strong>Communication:</strong> English (fluency), Hindi, Active Listening, Confidence</li>
    </ul>
  </section>
);

const Certifications = () => (
  <section>
    <h2>Certifications</h2>
    <ul>
      <li>HackerRank (Intermediate)</li>
      <li>React (Basic)</li>
      <li>Data Visualization using Python</li>
    </ul>
  </section>
);

const Extracurricular = () => (
  <section>
    <h2>Extracurricular Achievements</h2>
    <ul>
      <li>Participated as Vice Captain in Surya International Academy, Feb '17</li>
      <li>Participated in Social Service Dog Welfare Committee, 2023</li>
    </ul>
  </section>
);

const Hobbies = () => (
  <section>
    <h2>Hobbies & Interests</h2>
    <ul>
      <li>Traveling</li>
      <li>Cricket</li>
      <li>Kabaddi</li>
    </ul>
  </section>
);

const App = () => (
  <div className="App">
    <Header />
    <Summary />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Certifications />
    <Extracurricular />
    <Hobbies />
  </div>
);

export default App;
