import fontColorContrast from 'font-color-contrast'
import './CssColorsSheet.css'
import { Container, Paper } from '@mui/material'
import { cssNamedColors } from '../components/cssNamedColors'


export function CssColorsSheet () {
  function listColors () {
    let i = 0
    return cssNamedColors.map((bgColor) => {
        const color = fontColorContrast(bgColor.hex)
        const divStyle = {
          backgroundColor: bgColor.hex,
          color: color,
        }
      return <div key={i++} className='css-color-block' style={divStyle}>{bgColor.name}</div>
    })
  }

  return (
    <Container className='css-container'>
      <Paper className='css-demo css-colors-sheet' elevation={3}>
        {listColors()}
      </Paper>
    </Container>
  )
}
