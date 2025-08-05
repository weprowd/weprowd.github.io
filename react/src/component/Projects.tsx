import montevalleImg from "../assets/projects/montevalle.png"
import allaboutmeazImg from "../assets/projects/allaboutmeaz.png"
import luxemontreImg from "../assets/projects/luxemontre.png"

import IntroText from "./IntroText"

function Projects(){
    
    const intro = {heading: "My Projects", content: "A few websites I’ve helped bring to life"}

    return(
        <section id="projects" className="py-5">
            <div className="container">

                <IntroText
                    heading={intro.heading}
                    content={intro.content}
                />

                <div id="projectsCarousel" className="carousel slide pt-3" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <img src={montevalleImg} className="d-block w-100 rounded" alt="Project 1" />
                        </div>
                        <div className="col-md-6">
                        <h4 className="mt-3 mt-md-0">Montevalle Spa &amp; Wellness Resort</h4>
                        <p>During my time at Power Digital Marketing, I developed this fully responsive custom WordPress theme using ACF and CPT, based on a Figma design for a client. The site is fast, mobile-friendly, and SEO-optimized.</p>

                        <a href="https://montevalle.com/" target="_blank" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <img src={allaboutmeazImg} className="d-block w-100 rounded" alt="Project 2" />
                        </div>
                        <div className="col-md-6">
                        <h4 className="mt-3 mt-md-0">All About Me Medical Aesthetics</h4>
                        <p>Converted from Figma, this is a simple custom WordPress theme developed with a mega menu. It’s powered by Advanced Custom Fields (ACF) and Custom Post Types (CPT), and was built during my time at Power Digital Marketing.</p>
                        <a href="https://allaboutmeaz.com/" target="_blank" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <img src={luxemontreImg} className="d-block w-100 rounded" alt="Project 3" />
                        </div>
                        <div className="col-md-6">
                        <h4 className="mt-3 mt-md-0">LUXE MONTRE SG</h4>
                        <p>As a freelancer, I helped develop this site using the Avada Website Builder on WordPress. The homepage features unique section transitions.</p>
                        <a href="https://www.luxemontre.sg/" target="_blank" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                </div>
            </div>
        </section>
    )
}

export default Projects