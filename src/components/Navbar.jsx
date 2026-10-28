import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link'

export default function Navbar() {
  return (
    <header className="site-header">
      <NavLink to="/" className="logo" end>
        Samuel
      </NavLink>
      <nav aria-label="Main">
        <ul className="nav-list">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
