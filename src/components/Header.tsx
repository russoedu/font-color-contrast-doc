import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaBars, FaNpm } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import { useState } from 'react'
import { Logo } from './Logo'
import { ViewOnButton } from './ViewOnButton'

const pages = [
  { name: 'Colors Sheet', link: '/sheet' },
  { name: 'CSS Color Cheet', link: '/css-sheet' },
  { name: 'Color picker', link: '/picker' },
]

export function Header () {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }


  return (
    <AppBar position='sticky' enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'start', display: 'flex' }}>
          <Logo sx={{ mr: 2 }} />

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography textAlign="center">
                  <Link to={page.link}>
                    {page.name}
                  </Link>
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <ViewOnButton
              url='https://github.com/russoedu/font-color-contrast'
              text='view on GitHub'
              icon={<GoMarkGithub />}
            />
            <ViewOnButton
              url='https://www.npmjs.com/package/font-color-contrast'
              text='view on NPM'
              icon={<FaNpm />}
            />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <FaBars />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.link}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      {/* <Toolbar>
        <Typography className='navbar-item logo' variant='h5' component='div'>
          <Link to='/'>
            <img src="/font-color-contrast-logo.svg" alt="logo" />
            <div>font-color-contrast</div>
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
        <Typography className='navbar-item' variant='h6' component='div'>
          <Link to='/css-sheet'>
            CSS Color sheet demo
          </Link>
        </Typography>
        <div className='buttons'>
          <Button
            className='vob-get-links'
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
            className='vob-get-links'
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
      </Toolbar> */}
    </AppBar>
  )
}
