import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <div className="container py-5">
        <div className="section-title">My Coding Journey</div>
        <div className="timeline-container">
          <div className="timeline-item">
            <span className="timeline-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.43 14.57c-2.88 2.88-5.76 5.76-8.64 8.64-1.28-1.28-2.56-2.56-3.84-3.84l-4.24-4.24c-1.28-1.28-2.56-2.56-3.84-3.84-1.28-1.28-2.56-2.56-3.84-3.84-1.28-1.28-2.56-2.56-3.84-3.84c-1.28-1.28-2.56-2.56-3.84-3.84-1.28-1.28-2.56-2.56-3.84-3.84-1.28-1.28-2.56-2.56-3.84-3.84z"/><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </span>
            <div className="timeline-content">
              <h4>Bachelor of Computer Applications - BCA</h4>
              <p>Basic learning phase. Got my first interest in coding here!</p>
            </div>
            <div className="timeline-date">2021 - 2024</div>
          </div>
          
          <div className="timeline-item">
            <span className="timeline-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop-code"><path d="M20 7h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"/><path d="M10 20v-2c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2z"/><path d="M14.5 10l-3.5 4h7l-3.5 4"/></svg>
            </span>
            <div className="timeline-content">
              <h4>Master of Computer Applications - MCA</h4>
              <p>Currently exploring advanced development.</p>
            </div>
            <div className="timeline-date">2024 - Present</div>
          </div>
          
          <div className="timeline-item">
            <span className="timeline-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cube"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.23 7.5L12 12l8.77-4.5"/><path d="M12 21v-9.5"/><path d="M12 12l8.77-4.5"/><path d="M12 12l-8.77-4.5"/></svg>
            </span>
            <div className="timeline-content">
              <h4>Coding Experience</h4>
              <p>Frontend Focus (React,HTML,CSS, JavaScript,Bootstrap) & Backend Basics (Node.js, Express, MongoDB)</p>
            </div>
            <div className="timeline-date">Ongoing</div>
          </div>
        </div>
      </div>
      
      <div className="container py-5">
        <div className="section-title">Beyond Code: My Passions</div>
        <div className="passions-container">
          <div className="passion-card">
            <span className="passion-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-check"><path d="M8 2.2V16.5a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5V6.4a1 1 0 0 0-1-1H8.5a.5.5 0 0 1-.5-.5V2.2A.5.5 0 0 0 7 2h-.4a2 2 0 0 0-1.83 1L3 7.6a2 2 0 0 0 .7 2.7l.1.1a2 2 0 0 1 .6 1.4v4.6a2 2 0 0 0 2 2h2.5"/><path d="M10 16v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 0-.5.5z"/><path d="m14 11 2 2 4-4"/><path d="M21 2h-9.5A2.5 2.5 0 0 0 9 4.5v15A2.5 2.5 0 0 0 11.5 22H21a.5.5 0 0 0 .5-.5V2.5a.5.5 0 0 0-.5-.5z"/></svg>
            </span>
            <h5>Reading Books</h5>
            <p>Exploring knowledge beyond the screen.</p>
          </div>
          <div className="passion-card">
            <span className="passion-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2"><path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"/><path d="M6 12a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"/><path d="M20 12a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2h-2a2 2 0 0 0-2-2z"/><path d="M12 12h.01"/><path d="M12 16h.01"/><path d="M12 8h.01"/><path d="M12 4h.01"/><path d="M16 12h.01"/><path d="M16 8h.01"/><path d="M8 12h.01"/><path d="M8 8h.01"/></svg>
            </span>
            <h5>Gaming</h5>
            <p>competitive gaming & strategy development.</p>
          </div>
          <div className="passion-card">
            <span className="passion-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop-code"><path d="M20 7h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"/><path d="M10 20v-2c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2z"/><path d="M14.5 10l-3.5 4h7l-3.5 4"/></svg>
            </span>
            <h5>Exploring Tech</h5>
            <p>Always experimenting, trying new tools/frameworks.</p>
          </div>
        </div>
      </div>
      
      <div className="container py-5 text-center">
        <div className="section-title">Work Ethic & Mindset</div>
      </div>
      
>
    </>
  )
}

export default About