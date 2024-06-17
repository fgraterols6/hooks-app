import { Link, NavLink} from "react-router-dom"


export const Navbar = () => {

    const isActiveClass = ({isActive}) => {
        return `av-item nav-link ${isActive ? 'active' : ''}`
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 p-2">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

                <NavLink 
                    className= { isActiveClass }
                    to="/">
                    Home
                </NavLink>

                <NavLink 
                    className= { isActiveClass }
                    to="/about">
                    About
                </NavLink>

                <NavLink 
                    className= { isActiveClass }
                    to="/login">
                    Login
                </NavLink>


            </div>
        </div>
    </nav>
  )
}
