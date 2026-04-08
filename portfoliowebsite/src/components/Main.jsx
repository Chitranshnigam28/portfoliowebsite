import React from 'react'
import "./Main.css"
import HeroText from './HeroText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faJava, faJs, faLinkedin, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { faQuoteLeft, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <div className="main">
        <div className="heroImage">
            <img src="heroImage.jpeg" alt="hero image" />
        </div>
        <div className="HeroText">
            <HeroText/>
        </div>
        <div className="description">
            <p>"Full Stack Developer with 3 years of industry experience, passionate about building responsive web and mobile applications. Skilled in JavaScript, React.js, Node.js, MongoDB, and cloud deployment (AWS, Vercel, Render). Focused on creating scalable, user-friendly solutions with a strong understanding of backend systems, Bash scripting, and cloud services."</p>
        </div>
        <div className="gitlinkicons">
        <a href="https://github.com/Chitranshnigam28" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/chitransh-nigam" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        </div>

        <div id="skills">
          <h2 style={{textAlign:"center"}} id="skillsheading">Skills</h2>
          <div className="frontend">
          <DotLottieReact
      src="https://lottie.host/d8ed9030-066d-476b-88af-3e9e9cf338cc/ZDin0niPnB.lottie"
      loop
      autoplay
    />
        <div className="headingSkillsWrapper">
          <h2>Frontend Development</h2>
              <div className="skillsIcons">
                
                <span className="imgicons"><img src="html5.svg" alt="mongodb icon"/></span>
                <span className="imgicons"><img src="css3.svg" alt="mongodb icon"/></span>
                <span className="imgicons"><img src="javascript.svg" alt="mongodb icon"/></span>
                <span className="imgicons"><img src="mongodb.svg" alt="mongodb icon"/></span>
          
                <span className="imgicons"><img src="wordpress.svg" alt="mongodb icon"/></span>
                <span className="imgicons"><img src="bootstrap.svg" alt="mongodb icon"/></span>
                
                <span className="imgicons"><img src="mui.svg" alt="mongodb icon"/></span>
                <span className="imgicons"><img src="tailwindcss.svg" alt="mongodb icon"/></span>
                
                <span className="imgicons"><img src="react.svg" alt="mongodb icon"/></span>
                <span className="imgicons"><img src="reacthookform.svg" alt="mongodb icon"/></span>
                <span className="imgicons"><img src="reactrouter.svg" alt="mongodb icon"/></span>
              </div>
        </div>
          </div>
          <div className="backend">
          <DotLottieReact
      src="https://lottie.host/211a6f5a-ebcc-4cf2-9c05-cf1bed7e1321/EVHMt4RXih.lottie"
      loop
      autoplay
    />
        <div className="headingSkillsWrapper">
          <h2>Backend Development</h2>
        
            <div className="skillsIcons">
            <span className="imgicons"><img src="nodes.svg" alt="nodejs icon"/></span>
            <span className="imgicons"><img src="express.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="java.png" alt="express icon"/></span>
            <span className="imgicons"><img src="gnubash.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="mongodb.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="mysql.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="amazonwebservices.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="firebase.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="supabase.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="restapi.png" alt="express icon"/></span>
            <span className="imgicons"><img src="apache.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="github.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="googlemaps.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="openai.svg" alt="express icon"/></span>
            </div>
          </div>
        </div>
        <div className="backend">
          <DotLottieReact
      src="https://lottie.host/5b0f2ed0-eb2e-4272-a271-2a368ccb8eea/QxhikKhelF.lottie"
      loop
      autoplay
    />
        <div className="headingSkillsWrapper">
          <h2>Tools</h2>
        
            <div className="skillsIcons">
            <span className="imgicons"><img src="figma.svg" alt="nodejs icon"/></span>
            <span className="imgicons"><img src="jira.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="postman.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="slack.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="vercel.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="render.svg" alt="express icon"/></span>
            <span className="imgicons"><img src="photoshop.png" alt="express icon"/></span>
            </div>
          </div>
        </div>
        </div>
        <div className="quoteWrapper">
        <FontAwesomeIcon icon={faQuoteLeft} size="2x"/>
        <p className="quote">
          
          "Learning to write programs
          stretches your mind, and helps
          you think better, creates a way
          of thinking about things that I
          think is helpful in all domains."
        </p>
<h4>BILL GATES, MICROSOFT CO-FOUNDER</h4>
        </div>
        <div className="projects">
        <h2>Projects</h2>
        <div className="projectWrapper" id="projectWrapper">
          <div className="card">
  <div className="cardContent">
    <img src="./projects/airesumeanalyzer.png" alt="AI Resume Analyzer" />
    <h3>AI Resume Analyzer</h3>
    <p className="projectImpact">
    Built AI-powered platform analyzing 500+ resumes using ATS-based keyword extraction, achieving 98% response efficiency.
    </p>
    
    <p className="projectDescription">
    Real-time system that evaluates resumes against job descriptions, identifies missing keywords, and generates optimized resume content using AI.
    </p>
  </div>
  <div className="cardFooter">
    <h4 style={{ fontWeight: "bold" }}>Technologies</h4>
    <div className="skillsUsed">
      <span className="imgicons"><img src="react.svg" alt="react icon" /></span>
      <span className="imgicons"><img src="typescript.svg" alt="typescript icon" /></span>
      <span className="imgicons"><img src="tailwindcss.svg" alt="tailwindcss icon" /></span>
      <span className="imgicons"><img src="nodes.svg" alt="nodejs icon" /></span>
      <span className="imgicons"><img src="express.svg" alt="express icon" /></span>
      <span className="imgicons"><img src="openai.svg" alt="ai icon" /></span>
      <span className="imgicons"><img src="supabase.svg" alt="supabase icon" /></span>
      <span className="imgicons"><img src="github.svg" alt="github icon" /></span>
      <span className="imgicons"><img src="vercel.svg" alt="vercel icon" /></span>
      <span className="imgicons"><img src="render.svg" alt="render icon" /></span>
    </div>
    <a href="https://ai-resume-analyzer-git-deployment-chitransh-nigams-projects.vercel.app?_vercel_share=Q9C24Q8pkVtWYmZJRZbArnNihpkAMptl" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </a>
  </div>
</div>
          <div className="card">
            <div className="cardContent">
              <img src="./projects/sportcrush.png" alt="sportcrush" />
              <h3>SportsCrush</h3>
              <p className="projectImpact">
              Built location-based platform for discovering and joining sports communities.
              </p>
              
              <p className="projectDescription">
              Implements dynamic search and filtering with responsive UI to improve user interaction and accessibility.
              </p>
            </div>
            <div className="cardFooter">
              <h4 style={{fontStyle:"bold"}}>Technologies</h4>
              <div className="skillsUsed">
              <span className="imgicons"><img src="html5.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="css3.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="javascript.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="mongodb.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="github.svg" alt="express icon"/></span>
              </div>
              <a href="https://github.com/Kartavya052000/SportsCrush">
              <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="cardContent">
              <img src="./projects/lernen.png" alt="sportcrush" />
              <h3>Lernen</h3>
              <p className="projectImpact">
              Developed AI-powered learning platform with personalized roadmaps and gamified quizzes, increasing user engagement by 40%.
              </p>
              
              <p className="projectDescription">
              Generates skill paths, quizzes, and AI-driven resume suggestions with real-time progress tracking using cloud backend.
              </p>
            </div>
            <div className="cardFooter">
              <h4 style={{fontStyle:"bold"}}>Technologies</h4>
              <div className="skillsUsed">
              <span className="imgicons"><img src="react.svg" alt="react native icon"/></span>
                  <span className="imgicons"><img src="expo.svg" alt="expo icon"/></span>
                  <span className="imgicons"><img src="javascript.svg" alt="javascript icon"/></span>
                  <span className="imgicons"><img src="supabase.svg" alt="supabase icon"/></span>
                  <span className="imgicons"><img src="firebase.svg" alt="firebase icon"/></span>
                  <span className="imgicons"><img src="github.svg" alt="github icon"/></span>
                  <span className="imgicons"><img src="openai.svg" alt="openai icon"/></span>
                  <span className="imgicons"><img src="amazonwebservices.svg" alt="amazonwebservices icon"/></span>
              </div>
              <a href="https://lernen.wmdd.ca/">
              <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="cardContent">
              <img src="./projects/kisanai.jpeg" alt="sportcrush" />
              <h3>KisanAI</h3>
              <p className="projectImpact">
              Designed AI-based agriculture platform improving crop prediction accuracy by 30% using weather and soil data.
              </p>
              
              <p className="projectDescription">
              Combines APIs, data processing, and chatbot integration to deliver real-time insights and smarter farming decisions.
              </p>
            </div>
            <div className="cardFooter">
              <h4 style={{fontStyle:"bold"}}>Technologies</h4>
              <div className="skillsUsed">
              <span className="imgicons"><img src="html5.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="css3.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="javascript.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="mongodb.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="nodes.svg" alt="nodes icon"/></span>
                  <span className="imgicons"><img src="express.svg" alt="express icon"/></span>
                  <span className="imgicons"><img src="react.svg" alt="react icon"/></span>
                  <span className="imgicons"><img src="openai.svg" alt="openai icon"/></span>
                  <span className="imgicons"><img src="github.svg" alt="github icon"/></span>
                  <span className="imgicons"><img src="vercel.svg" alt="vercel icon"/></span>
                  <span className="imgicons"><img src="render.svg" alt="render icon"/></span>
              </div>
              <a href="https://kisanai.ca/landing">
              <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="cardContent">
              <img src="./projects/bookshop.png" alt="bookshop" />
              <h3>Bookshop</h3>
              <p className="projectImpact">
              Developed full-stack application with dynamic data rendering and REST API integration.
              </p>
              
              <p className="projectDescription">
              Designed to handle scalable data operations with responsive UI and efficient backend communication.
              </p>
            </div>
            <div className="cardFooter">
              <h4 style={{fontStyle:"bold"}}>Technologies</h4>
              <div className="skillsUsed">
              <span className="imgicons"><img src="react.svg" alt="react native"/></span>
              <span className="imgicons"><img src="nodes.svg" alt="nodes icon"/></span>
              <span className="imgicons"><img src="express.svg" alt="express icon"/></span>
                  <span className="imgicons"><img src="javascript.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="mongodb.svg" alt="mongodb icon"/></span>
                  <span className="imgicons"><img src="github.svg" alt="express icon"/></span>
              </div>
              <a href="https://github.com/Chitranshnigam28/bookshop.github.io">
              <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Main
