import wordpressIcon from "../assets/svgs/wordpress-icon.svg"
import dragnDropIcon from "../assets/svgs/dragndrop-icon.svg"
import frontEndIcon from "../assets/svgs/font-end-icon.svg"
import maintenanceIcon from "../assets/svgs/maintenance-icon.svg"
import codeIcon from "../assets/svgs/code-icon.svg"
import optimizeIcon from "../assets/svgs/optimize-icon.svg"

import Skill from "./Skill"
import IntroText from "./IntroText"

function Skills(){
    const intro = {heading: "My Skills", content: "Tools and technologies I specialize in"};
    const skills = [
        { icon: wordpressIcon, heading: "WordPress Development", content: "9+ years building custom, responsive WordPress sites from PSD/Figma designs." },
        { icon: dragnDropIcon, heading: "WordPress Drag & Drop", content: "Skilled in building websites using popular page builders like Elementor, Divi, and WPBakery." },
        { icon: frontEndIcon, heading: "Front-End Coding", content: "Experienced in HTML5, SCSS, JavaScript, and responsive frameworks like Bootstrap." },
        { icon: maintenanceIcon, heading: "Website Maintenance", content: "Providing ongoing support, fixing bugs, and ensuring optimal performance." },
        { icon: codeIcon, heading: "Figma to Code", content: "Translating clean Figma or Photoshop designs into fast, functional websites." },
        { icon: optimizeIcon, heading: "SEO & Optimization", content: "Building websites with performance, SEO best practices, and user experience in mind." },
    ];

    return(
        <section id="skills" className="py-5 bg-light">
            <div className="container">

                <IntroText
                    heading={intro.heading}
                    content={intro.content}
                />

                <div className="row g-4">

                    {
                        skills.map((item, index) => (
                            <Skill
                                 key={index}
                                icon={item.icon}
                                heading={item.heading}
                                content={item.content}
                            />
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default Skills