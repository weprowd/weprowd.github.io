function NavLinks(){
    const navLinks = [
        { href: "#aboutme", label: "About" },
        { href: "#carouselTwoItems", label: "Feedback" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { 
            href: "https://drive.google.com/file/d/1dhwYFNUTXhxsvFJMMrI0tcVREcjqqTA1/view?usp=sharing", 
            label: "Resume",
            target: "_blank",
        },
        { href: "#contact", label: "Contact" },
    ];

    return(
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                {
                    navLinks.map((link) => (
                        <li className="nav-item">
                            <a 
                            className="nav-link" 
                            href={link.href}
                            target={link.target || "_self"}
                            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default NavLinks