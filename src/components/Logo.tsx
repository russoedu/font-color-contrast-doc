import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import { Link } from "react-router-dom";
import './Logo.css'
import logo from '../assets/font-color-contrast-logo.svg'
export function Logo ({ sx }: {
  sx?: SxProps<Theme>,
}) {
  return(
    <Typography
      className='navbar-item logo'
      variant='h5'
      noWrap
      component='div'
      sx={sx}
    >
      <Link to='/'>
        <img src={logo} alt="logo" />
        <div>font-color-contrast</div>
      </Link>
    </Typography>
  )
}
