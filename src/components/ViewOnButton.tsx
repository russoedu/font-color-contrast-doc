import { Button } from "@mui/material";
import './ViewOnButton.css'

export function ViewOnButton ({ url, text, icon }: {
  url: string,
  text: string,
  icon: any,
 }) {
  return (
    <a
      className="view-on-button"
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      <Button
        className='vob-get-links'
        color='secondary'
        variant='contained'
        sx={{ display: { lg: 'flex', xs: 'none' } }}
        endIcon={icon}
      >
        {text}
      </Button>
      <Button
        className='vob-get-links vob-get-links-compact'
        color='secondary'
        variant='contained'
        sx={{ display: { md: 'flex', lg: 'none' }, paddingRight: '10px' }}
      >
        <span className='vob-get-links-icon'>
          {icon}
        </span>
      </Button>
    </a>
  )
}
