
import logo from '../assets/logo.png';
import heroImage1 from '../assets/hero-bg1.jpg';
import heroImage3 from '../assets/hero-bg3.jpg';
import heroImage2 from '../assets/hero-bg2.jpg';

import CarouselSlide from './CarouselSlide';

function Carousel(){

    const slides = [
        { 
            bgImageUrl: heroImage1, 
            heading: "Hi, I'm Ronilo Yap Jr.", 
            content: "Website Developer with 9+ Years of Experience",
            button: [
               {
                 href: "#aboutme",
                 label: "About Me"
               }     
            ]
         },
         { 
            bgImageUrl: heroImage3, 
            heading: "From Design to Fully Functional Websites", 
            content: "I build responsive, mobile-friendly sites using WordPress and Shopify",
            button: [
               {
                 href: "#projects",
                 label: "View Projects"
               }     
            ]
         },
         { 
            bgImageUrl: heroImage2, 
            heading: "Beyond Development: I Fix, Support & Maintain", 
            content: "Ensuring peak performance with regular updates and technical support",
            button: [
               {
                 href: "#skills",
                 label: "Explore My Skills"
               }     
            ]
         }
    ]

    return(

        <div id="portfolioCarousel" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

                {
                    slides.map((item, index) =>(

                        <CarouselSlide 
                            index={index}
                            bgImageUrl={item.bgImageUrl}
                            heading={item.heading}
                            content={item.content}
                            logo={logo}
                            buttons={item.button}
                        />

                    ))
                }
               
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel