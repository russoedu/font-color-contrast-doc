import { Link } from 'react-router-dom'
import './Header.css'

export function Header () {
  return (
    <nav className='navbar is-fixed-top is-info has-shadow' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          font-color-contrast
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/sheet'>Color sheet</Link>
          <Link className='navbar-item' to='/picker'>Picker demo</Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a href='https://github.com/russoedu/font-color-contrast' target='_blank' rel='noreferrer' className='button is-primary'>
                <strong>get on GitHub</strong>
              </a>
              <a href='https://www.npmjs.com/package/font-color-contrast' target='_blank' rel='noreferrer' className='button is-light'>
                get on npm
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}