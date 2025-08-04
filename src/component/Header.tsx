
import NavLinks from "./NavLinks"
import HeaderLogo from "./HeaderLogo"

function Header() {
  

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <HeaderLogo />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <NavLinks />

            </div>
        </nav>
      </header>
    </>
  )
}

export default Header
