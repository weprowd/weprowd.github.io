import ratingImg1 from '../assets/upwork/rating1.png';
import ratingImg2 from '../assets/upwork/rating2.png';
import ratingImg3 from '../assets/upwork/rating3.png';
import ratingImg4 from '../assets/upwork/rating4.png';
import ratingImg5 from '../assets/upwork/rating5.png';
import ratingImg6 from '../assets/upwork/rating6.png';
import ratingImg7 from '../assets/upwork/rating7.png';
import ratingImg8 from '../assets/upwork/rating8.png';

import IntroText from './IntroText';

function Testimonials(){

    const intro = {heading: "What Clients Say", content: ""}
    
    
    return(
        <div className="py-5 text-center bg-
        light">
            <div className="container">

                <IntroText
                    heading={intro.heading}
                    content={intro.content}
                />
    
                <div id="carouselTwoItems" className="carousel slide" data-bs-ride="carousel">
    
                    <div className="carousel-inner">
    
                        <div className="carousel-item active">
                            <img src={ratingImg1} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ratingImg2} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ratingImg3} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ratingImg4} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ratingImg5} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ratingImg6} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ratingImg7} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={ratingImg8} className="d-block w-75 mx-auto" alt="Image 1" />
                        </div>
    
                    </div>
    
                
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselTwoItems" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselTwoItems" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselTwoItems" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselTwoItems" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
    
                </div>

             
                <a href="https://upwork.com/freelancers/ronilojryap2" target="_blank" className="btn btn-dark mt-4">See my Upwork Profile</a>

            </div>

        </div>
    );
}   

export default Testimonials