import navLogo from "../assets/nav-logo.png"

function HeaderLogo(){
    return(
        <a className="navbar-brand" href="#">
            <img src={navLogo} alt="" id="logo" />
        </a>
    )
}
export default HeaderLogo
