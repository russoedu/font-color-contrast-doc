import { Link } from 'react-router-dom'
import './Header.css'

export function Header () {
  return (
    <nav className="navbar is-fixed-top is-info has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        font-color-contrast
        {/* <Link className="navbar-item" href="/">
          <img src={logo}></img>
        </Link> */}
      </div>
      <div className='navbar-menu'>
        <div className="navbar-start">
          <Link className='navbar-item' to="/">Color sheet</Link>
          <Link className='navbar-item' to="/picker">Picker demo</Link>
        </div>
      </div>
    </nav>
  )
}