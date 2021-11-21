import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaNpm } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'


export function Header () {
  return (
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
  )
}
