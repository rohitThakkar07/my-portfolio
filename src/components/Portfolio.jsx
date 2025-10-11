import './Portfolio.css';
import myResumePDF from '../assets/Resume.pdf';
import { Link } from 'react-router-dom';
// import myResumeDOC from '../assets/Resume.docx';

const Portfolio = () => {
    return (
        <>
            {/* Toast Container for Popups  */}
            <div className="toast-container position-fixed top-0 end-0 p-3">
                <div id="downloadToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body text-bg-primary rounded-pill">
                            Download started!
                        </div>
                    </div>
                </div>
            </div>



            {/* <!-- Hero Section --> */}
            <section id="home" className="d-flex align-items-center justify-content-center text-center min-vh-100 pt-5">
                <div className="container px-4">
                    <h1 className="display-1 mb-4 ">Hey, I'm Rohit Thakkar</h1>
                    <p className="fs-4 text-neutral-400 mb-5 ">Designer & Developer</p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center g-3  ">
                        <Link to="/projects" id='btnWhite' className="btn  px-4 fw-semibold me-sm-3 mb-3 mb-sm-0 shadow-lg d-flex align-items-center justify-content-center">View Projects</Link>
                        <a href="#contact" id="btnBorder" className=" px-4 fw-semibold shadow-lg d-flex align-items-center justify-content-center text-neutral-400">Contact Me</a>
                    </div>
                </div>
            </section>

            {/* <!-- Skills & Tools Section --> */}
            <section id="about" className="py-5 bg-neutral-900">
                <div className="container px-4 text-center">
                    <h2 className="display-4 fw-extrabold mb-5">Skills & Tools</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card p-4 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A", color: "white" }}>
                                <div className="d-flex align-items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40" className="me-4" />
                                    <div>
                                        <h3 className="h5 fw-bold mb-1">React</h3>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small className="text-muted text-neutral-400">90% Proficiency</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card p-4 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A", color: "white" }}>
                                <div className="d-flex align-items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" width="40" height="40" style={{ filter: "invert(49%) sepia(98%) saturate(1917%) hue-rotate(338deg) brightness(102%) contrast(100%)" }} className="me-4" />
                                    <div>
                                        <h3 className="h5 fw-bold mb-1">Express js</h3>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small className="text-muted text-neutral-400">60% Proficiency</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card p-4 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A", color: "white" }}>
                                <div className="d-flex align-items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="40" height="40" className="me-4" />
                                    <div>
                                        <h3 className="h5 fw-bold mb-1">MongoDB</h3>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small className="text-muted text-neutral-400">65% Proficiency</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card p-4 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A", color: "white" }}>
                                <div className="d-flex align-items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40" className="me-4" />
                                    <div>
                                        <h3 className="h5 fw-bold mb-1">Node.js</h3>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small className="text-muted text-neutral-400">70% Proficiency</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card p-4 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A", color: "white" }}>
                                <div className="d-flex align-items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="40" height="40" className="me-4" />
                                    <div>
                                        <h3 className="h5 fw-bold mb-1">Java(core)</h3>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small className="text-muted text-neutral-400">70% Proficiency</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card p-4 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A", color: "white" }}>
                                <div className="d-flex align-items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="40" height="40" className="me-4" />
                                    <div>
                                        <h3 className="h5 fw-bold mb-1">MySql</h3>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small className="text-muted text-neutral-400">70% Proficiency</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Services Section --> */}
            <section id="projects" className="py-5">
                <div className="container px-4 text-center">
                    <h2 className="display-4 fw-extrabold mb-5">Want a Site?</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="card p-5 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="bi bi-code-slash text-primary mb-3 mx-auto" width="48" height="48">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25M6 18.75h3.625c1.026 0 1.945-.694 2.224-1.664l.97-3.424A3.75 3.75 0 0115.375 12H18" />
                                </svg>
                                <h3 className="h4 fw-bold mb-2" style={{ color: "white" }}>Web Development</h3>
                                <p className="text-neutral-400">Dynamic, responsive web applications built with React.js</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-5 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="bi bi-server text-primary mb-3 mx-auto" width="48" height="48">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25M6 18.75h3.625c1.026 0 1.945-.694 2.224-1.664l.97-3.424A3.75 3.75 0 0115.375 12H18" />
                                </svg>
                                <h3 className="h4 fw-bold mb-2" style={{ color: "white" }}>Backend Development</h3>
                                <p className="text-neutral-400">Scalable backend solutions with Node.js and MongoDB</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-5 rounded-4 shadow-lg h-100" style={{ background: "#0A0A0A" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="bi bi-palette text-primary mb-3 mx-auto" width="48" height="48">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.375 11.25L10.75 14.25m3.75-3h-4.5m4.5 3.5h-4.5M12 18a6 6 0 100-12 6 6 0 000 12z" />
                                </svg>
                                <h3 className="h4 fw-bold mb-2" style={{ color: "white" }}>UI/UX Design</h3>
                                <p className="text-neutral-400">Beautiful, intuitive interfaces with modern design principles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Download Resume Section --> */}
            <section className="py-5 download_resume">
                <div className="container px-4 text-center">
                    <h2 className="display-4 fw-extrabold mb-5" >Download Resume</h2>
                    <div className="card p-5 rounded-4 shadow-lg mx-auto" style={{ maxWidth: "700px", background: "#0A0A0A" }}>
                        <div className="d-flex align-items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-earmark-arrow-down-fill text-primary" viewBox="0 0 16 16">
                                <path d="M9.25 10a.5.5 0 01.5.5v1.293l.646-.647a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l.646.647V10.5a.5.5 0 01.5-.5z" />
                                <path d="M14 14V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2zM9.5 3A1.5 1.5 0 0111 4.5v1.75a.5.5 0 01-1 0V4.5a.5.5 0 00-.5-.5H5a.5.5 0 00-.5.5V11a.5.5 0 00.5.5h2a.5.5 0 010 1H5a1.5 1.5 0 01-1.5-1.5V2a1.5 1.5 0 011.5-1.5h3.5a.5.5 0 01.5.5z" />
                            </svg>
                            <div className="ms-3">
                                <h3 className="h5 fw-bold mb-1" style={{ color: "white" }} >Download Resume</h3>
                                <p className="text-neutral-400 mb-0">Get my latest resume in your preferred format</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column flex-sm-row g-3">
                            <a
                                href={myResumePDF}
                                download
                                id='btnWhite'
                                className=" btn px-4 fw-semibold me-sm-3 mb-3 mb-sm-0 shadow-lg d-flex align-items-center justify-content-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 01.5.5v2.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5a.5.5 0 011 0v2.5A1.5 1.5 0 0112.5 15h-10A1.5 1.5 0 01.5 13.5v-2.5a.5.5 0 01.5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
                                </svg>
                                <span>Download PDF</span>
                            </a>

                            <a href="#" id="btnBorder" className=" px-4 fw-semibold shadow-lg d-flex align-items-center justify-content-center text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up-right me-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 00-.5-.5H1.5A1.5 1.5 0 000 4.5v10A1.5 1.5 0 001.5 16h10a1.5 1.5 0 001.5-1.5V7.864a.5.5 0 00-1 0V14.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h7.5a.5.5 0 00.5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.793L6.343 9.146a.5.5 0 00.707.708L15 1.707V5.5a.5.5 0 001 0v-5z" />
                                </svg>
                                <span>More Formats</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <script src="../assets/js/script.js"></script>
        </>
    )
}

export default Portfolio



