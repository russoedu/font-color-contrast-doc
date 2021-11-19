import { AppBar, Button, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { cloneElement } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaNpm } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

function ElevationScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 6 : 0,
  });
}

export function Header () {
  return (
    <ElevationScroll>
      <AppBar position='sticky' enableColorOnDark>
        <Toolbar>
          <Typography className='navbar-item' variant='h5' component='div'>
            <Link to='/'>
              font-color-contrast
            </Link>
          </Typography>
          <Typography className='navbar-item' variant='h6' component='div'>
            <Link to='/sheet'>
              Color sheet demo
            </Link>
          </Typography>
          <Typography className='navbar-item' variant='h6' component='div'>
            <Link to='/picker'>
              Color picker demo
            </Link>
          </Typography>
          <div className='buttons'>
            <Button
              className='get-links'
              color='secondary'
              variant='contained'
              endIcon={<GoMarkGithub />}
            >
              <a
                href='https://github.com/russoedu/font-color-contrast'
                target='_blank'
                rel='noreferrer'
              >
                view on GitHub
              </a>
            </Button>
            <Button
              className='get-links'
              color='secondary'
              variant='contained'
              endIcon={<FaNpm />}
            >
              <a
                href='https://www.npmjs.com/package/font-color-contrast'
                target='_blank'
                rel='noreferrer'
              >
                view on npm
              </a>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
/* <Toolbar
        component='nav'
        // variant='dense'
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <Link
          color='inherit'
          noWrap
          key='sheet'
          variant='body2'
          href='/sheet'
          sx={{ p: 1, flexShrink: 0 }}
        >
          Color sheet
        </Link>
      </Toolbar> */
// <nav className='navbar is-fixed-top is-info has-shadow' role='navigation' aria-label='main navigation'>
//   <div className='navbar-brand'>
//     <Link className='navbar-item' to='/'>
//       font-color-contrast
//     </Link>
//   </div>
//   <div className='navbar-menu'>
//     <div className='navbar-start'>
//       <Link className='navbar-item' to='/sheet'>Color sheet</Link>
//       <Link className='navbar-item' to='/picker'>Picker demo</Link>
//     </div>
//     <div className='navbar-end'>
//       <div className='navbar-item'>
//         <div className='buttons'>
//           <a href='https://github.com/russoedu/font-color-contrast' target='_blank' rel='noreferrer' className='button is-primary'>
//             <strong>get on GitHub</strong>
//           </a>
//           <a href='https://www.npmjs.com/package/font-color-contrast' target='_blank' rel='noreferrer' className='button is-light'>
//             get on npm
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
