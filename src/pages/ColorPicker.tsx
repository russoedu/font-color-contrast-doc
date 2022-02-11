import { HexColorPicker } from 'react-colorful'
import fontColorContrast from 'font-color-contrast'
import { Container, InputLabel, Paper, Select, FormControl, Card, CardContent, Typography, Grid } from '@mui/material'
import { fontFamilies, fontOptions, fontSizes, sizeOptions } from '../components/font'

import './ColorPicker.css'
import { useState } from 'react'
import { ColorCode } from '../components/ColorCode'

export function ColorPicker ({ fontIndex, setFontIndex, color, setColor, sizeIndex, setSizeIndex }: {
    fontIndex: number,
    setFontIndex: React.Dispatch<React.SetStateAction<number>>,
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>
    sizeIndex: number,
    setSizeIndex: React.Dispatch<React.SetStateAction<number>>
}){

  const [bgColor, setBgColor] = useState('#ffffff')

  function handleFontChange (event: any) {
    setFontIndex(event.target.value)
  }

  function handleSizeChange (event: any) {
    setSizeIndex(event.target.value)
  }

  function handleColorChange (color: string) {
    setColor(color)
    setBgColor(fontColorContrast(color))
  }

  return (
    <Container className='cp-container'>
      <div className='cp-font-selector cp-container-item'>
        <FormControl
          sx={{
            marginRight: '1em',
            width: '200px',
          }}
        >
          <InputLabel id="font-label">font</InputLabel>
          <Select
            labelId="font-label"
            id="font"
            label="Font"
            value={fontIndex}
            onChange={handleFontChange}
          >
            {fontOptions}
          </Select>
        </FormControl>
        <FormControl
           sx={{
            width: '100px',
          }}
        >
          <InputLabel id="font-size">size</InputLabel>
          <Select
            labelId="font-size"
            id="size"
            label="Size"
            value={sizeIndex}
            onChange={handleSizeChange}
          >
            {sizeOptions}
          </Select>
        </FormControl>
      </div>
      <div className='cp-color-picker cp-container-item'>
        <HexColorPicker color={color} onChange={handleColorChange} />
        <Card
          className='color-picker-details' style={{
            backgroundColor: color,
            color: bgColor,
          }}
        >
          <CardContent>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={7} sx={{ textAlign: 'right'}}>
                <Typography>
                  color:
                </Typography>
              </Grid>
              <Grid item xs={9} sx={{ paddingLeft: '0' }}>
                <span><ColorCode color={color}/></span>
              </Grid>
              <Grid item xs={7} sx={{ textAlign: 'right'}}>
                <Typography>
                  bg:
                </Typography>
              </Grid>
              <Grid item xs={9} sx={{ paddingLeft: '0' }}>
                <span><ColorCode color={bgColor}/></span>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <Paper
        className='cp-demo-bg cp-container-item'
        elevation={3}
        style={{
          backgroundColor: color,
          color: bgColor,
          fontFamily: fontFamilies[fontIndex].value,
          fontSize: fontSizes[sizeIndex],
        }}
      >
        <h1>{fontFamilies[fontIndex].name} {fontSizes[sizeIndex]}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mi sit amet eros ultrices efficitur. Integer et orci accumsan lacus luctus placerat non ut tellus. Praesent et cursus turpis. Phasellus pharetra orci et enim congue sodales. Cras quis tellus scelerisque, pharetra augue sed, lacinia diam. Nulla sed varius tellus. Fusce egestas neque vitae aliquet laoreet. Vivamus vestibulum diam non tellus tristique, sit amet imperdiet sem gravida.</p>
        <p><i>Mauris felis orci, accumsan vitae vestibulum et, vehicula ac turpis. Aliquam orci ex, cursus sed porttitor sed, ultricies sit amet augue. Nunc iaculis elementum varius. Curabitur ullamcorper auctor odio, ut eleifend metus. Nulla porta massa ut lorem suscipit tincidunt. Aenean a augue lectus. Cras a odio dignissim, pellentesque dolor et, ultrices quam. Duis id tincidunt lorem. In porta massa non tempor interdum. Morbi eu nisl at nibh cursus vehicula. Etiam posuere scelerisque purus, ac venenatis sem auctor sit amet. Quisque tempor ac odio eget scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum a consectetur sem, vel sodales neque. Pellentesque vestibulum lacus a arcu gravida efficitur.</i></p>
        <p>Nullam sit amet lorem lacus. Vivamus ante felis, tempus nec dapibus porttitor, porta id nibh. Quisque faucibus, lacus eu vehicula commodo, lectus orci commodo nibh, et ultricies nunc tellus at est. Nulla vel suscipit lorem. Mauris gravida blandit ligula, pretium scelerisque odio facilisis quis. Fusce et urna eu diam varius sollicitudin. In vel nibh id orci mattis lacinia. Nullam ac purus ac est pretium molestie quis quis velit.</p>
        <p><b>Etiam viverra tortor vitae sem dictum luctus. Sed et faucibus risus. Sed sodales nunc felis, eget consectetur odio dignissim at. Sed tempus mi quis risus tempus gravida. Ut eu sagittis urna. Ut est sem, porttitor ut hendrerit sit amet, pulvinar non est. Quisque consequat sem a enim porta congue. Maecenas tortor est, tincidunt ac ex sed, efficitur porta dui. Morbi rhoncus nisi nibh, sit amet consectetur libero ultricies vel. Integer fermentum sollicitudin sapien quis aliquam. Sed iaculis venenatis eleifend. Praesent feugiat massa eget nibh egestas, ut dapibus neque tincidunt. Proin vel turpis rhoncus, scelerisque nunc nec, euismod libero. Donec sollicitudin nibh tellus, sed imperdiet metus malesuada sit amet. Duis consequat, lacus elementum hendrerit ultrices, arcu ex mollis leo, nec aliquam est ex nec sem.</b></p>
        <p>Praesent fermentum a ligula a blandit. Cras rhoncus laoreet neque, sed hendrerit nulla malesuada mollis. Fusce vitae condimentum quam. Integer nulla nibh, ultrices nec augue quis, porttitor porttitor turpis. Cras non iaculis eros, sed laoreet nisi. Nullam a nisl in dui venenatis cursus. Nullam viverra sed odio id tincidunt.</p>
      </Paper>
    </Container>
  )
}
