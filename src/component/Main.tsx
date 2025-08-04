import Carousel from './Carousel'
import Projects from './Projects'
import Testimonials from './Testimonials'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

function Footer(){
    return(

        <main>
            <Carousel />
            <Testimonials />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>

    );
}

export default Footer