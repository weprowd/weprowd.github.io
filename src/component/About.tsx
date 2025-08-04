import aboutme from "../assets/aboutme.png";

function About(){
    return(
        <section className="container my-5 pt-3 pb-3" id="aboutme">
            <div className="row align-items-center">
           
                <div className="col-md-6 mb-4 mb-md-0">
                <img src={aboutme} className="img-fluid rounded" alt="Ronilo Yap Jr" />
                </div>

              
                <div className="col-md-6 p-5">
                <h2 className="mb-3">About Me</h2>
                <p>
                    I'm Ronilo Meñosa Yap Jr., a seasoned Web Developer with over 9 years of experience specializing in WordPress and Shopify. I build responsive, mobile-optimized websites using HTML5, SCSS, JavaScript, and PHP. From converting Figma and Photoshop designs into functional websites to ongoing maintenance and troubleshooting, I bring precision and performance to every project.
                </p>
                <p>
                    I’ve worked with agencies like <a href="https://www.proweaver.com/" target="_blank">Proweaver</a>, <a href="https://www.publicadagency.com/" target="_blank">Public Advertising</a>, and <a href="https://powerdigitalmarketing.com/" target="_blank">Power Digital Marketing</a>, delivering tailored web solutions and maintaining high-performing sites. My goal is to create engaging, user-friendly experiences that meet modern digital needs.
                </p>
                <a href="#projects" className="btn btn-primary mt-3" target="_blank">View Portfolio</a>
                </div>
            </div>
        </section>
    )
}

export default About