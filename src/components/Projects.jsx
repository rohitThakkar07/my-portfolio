import React from 'react'
import './Projects.css'
import CryptoToolsImg from '../assets/images/cryptoTools.png';
const Projects = () => {
    return (
        <>

            <div className="hero-section">
                <div className="container">
                    <h1>CryptoTools - Ultimate Crypto Hub</h1>
                    <p>A powerful utility app to encrypt and decrypt text or files, ensuring data privacy and security with ease.</p>
                    <div className="video-container">
                        <img
                            src={CryptoToolsImg}
                            alt="Crypto Tools Project"
                        />

                    </div>
                    <br /><br />
                    <a href="https://crypto-tools.wuaze.com/" className="btn-live-preview me-3 p-3">View Live Site</a>
                    <a href="https://github.com/rohitThakkar07/crypto-tools" className="btn-source-code">View Source Code</a>
                </div>
            </div>

            <div className="container py-5">
                <div className="text-center">
                    <h1 className="section-title">Showcasing My Best Work</h1>
                    <p className="lead" style={{ color: '#aaa', marginTop: '-2rem' }}>A collection of projects built with passion, skill, and innovation.</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="section-title">Featured Project</div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="project-card d-flex flex-column flex-md-row">
                            <div className="me-md-5 mb-4 mb-md-0">
                                <h4 className="mb-3">CryptoTools - Ultimate Crypto Hub</h4>
                                <p>A powerful utility app to encrypt and decrypt text or files, ensuring data privacy and security with ease.</p>
                                <p className="fw-bold">Key Challenges & Learnings:</p>
                                <ul>
                                    <li>Implementing multiple encryption algorithms for robust security.</li>
                                    <li>Managing key generation and validation for accurate decryption.</li>
                                    <li>Ensuring a user-friendly interface while dealing with complex cryptographic operations.</li>
                                </ul>
                                <div className="tech-stack-row">
                                    <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="24" height="24" /></span>
                                    <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" width="24" height="24" /></span>
                                    <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="24" height="24" /></span>
                                    <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="24" height="24" /></span>
                                    <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" width="24" height="24" /></span>
                                </div>
                                <div className="d-flex mt-4">
                                    <a href="#" className=" btn-live-preview">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        Live Preview
                                    </a>
                                    <a href="#" className="btn-source-code d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="section-title">Development Projects</div>
                <div className="row g-4">
                    {/* Project Card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card">
                            <h5>Employee Management System</h5>
                            <p className="mt-3">A clean and minimal task management tool with drag-and-drop support for easy organization.</p>
                            <div className="tech-stack-row">
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" width="20" height="20" /></span>
                            </div>
                            <div className="d-flex mt-4">
                                <a href="#" className="btn-live-preview d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    Live Preview
                                </a>
                                <a href="#" className="btn-source-code d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card">
                            <h5>Gujarat Tourism</h5>
                            <p className="mt-3">A real-time weather app with an intuitive UI, showing current conditions and a 5-day forecast.</p>
                            <div className="tech-stack-row">
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="20" height="20" /></span>
                            </div>
                            <div className="d-flex mt-4">
                                <a href="#" className="btn-live-preview d-flex align-items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    Live Preview
                                </a>
                                <a href="#" className="btn-source-code d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card">
                            <h5>Calculator WebApp</h5>
                            <p className="mt-3">A travel and adventure blog with a focus on immersive visuals and user-generated content.</p>
                            <div className="tech-stack-row">
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="20" height="20" /></span>
                            </div>
                            <div className="d-flex mt-4">
                                <a href="https://rohitthakkar07.github.io/Calculator/" className="btn-live-preview d-flex align-items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    Live Preview
                                </a>
                                <a href="https://github.com/rohitThakkar07/Calculator" className="btn-source-code d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card">
                            <h5>Crypto Tools</h5>
                            <p className="mt-3">A powerful utility app to encrypt and decrypt text or files, ensuring data privacy and security with ease</p>
                            <div className="tech-stack-row">
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="20" height="20" /></span>
                                <span className="tech-stack-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="20" height="20" /></span>
                            </div>
                            <div className="d-flex mt-4">
                                <a href="http://crypto-tools.wuaze.com/?i=1" target='_blank' className="btn-live-preview d-flex align-items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    Live Preview
                                </a>
                                <a href="https://github.com/rohitThakkar07/crypto-tools" target='_blank' className="btn-source-code d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 tech-stack-breakdown">
                <div className="section-title">Tech Stack Breakdown</div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="my-4">
                            <div className="tech-item"><span>Frontend</span><span>90%</span></div>
                            <div className="progress-bar-container"><div className="progress-bar" style={{ width: '90%' }}></div></div>
                        </div>
                        <div className="my-4">
                            <div className="tech-item"><span>Backend</span><span>65%</span></div>
                            <div className="progress-bar-container"><div className="progress-bar" style={{ width: '65%' }}></div></div>
                        </div>
                        <div className="my-4">
                            <div className="tech-item"><span>APIs</span><span>80%</span></div>
                            <div className="progress-bar-container"><div className="progress-bar" style={{ width: '80%' }}></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
