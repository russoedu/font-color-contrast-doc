import generator from 'sequential-id-generator'
import fontColorContrast from 'font-color-contrast'
import './ColorsSheet.css'
import { Slider } from '../components/Slider'
import { ColorCode, toHex } from '../components/ColorCode'
import { Container, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'

const sliceSize = 16 ** 2

export function ColorsSheet ({red, setRed, green, setGreen }: {
  red: number,
  setRed: React.Dispatch<React.SetStateAction<number>>,
  green: number,
  setGreen: React.Dispatch<React.SetStateAction<number>>,
}) {
  const [colorsSheet, setColorsSheet] = useState([''])
  const [colorsLoaded, setColorsLoaded] = useState(false)

  useEffect(() => {
    getColorsSheet(red, green).then(sheet => {
      setColorsSheet(sheet)
      setColorsLoaded(true)
    })
  }, [red, green])

  function colorSheet () {
    let i = 0
    return colorsSheet.map((bgColor) => {
        const color = fontColorContrast(bgColor)
        const divStyle = {
          backgroundColor: bgColor,
          color: color,
        }
      return <div key={i++} className='color-block' style={divStyle}>{bgColor}</div>
    })
  }

  return (
    <Container className='container'>
      {!colorsLoaded
        ? <div>Loading colors sheet, this might take a while</div>
        : <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: '1em 0',
              }}
            >
              <Slider
                className='slider red-slider'
                min={0}
                max={255}
                value={red}
                setValue={setRed}
              />
              <Slider
                className='slider green-slider'
                min={0}
                max={255}
                value={green}
                setValue={setGreen}
              />
              <span className='pagination'>from <ColorCode red={red} green={green} blue={0} /> to <ColorCode red={red} green={green} blue={0xff} /></span>
            </Box>
            <Paper className='demo colors-sheet' elevation={3}>
              {colorSheet()}
            </Paper>
          </>
        }
    </Container>
  )
}

async function getColorsSheet (red: number, green: number): Promise<string[]> {
  const r = toHex(red)
  const g = toHex(green)

  const colorsSheet: string[] = ['#' + r + g + '00']
  const colors = generator(r + g + '00', '0123456789ABCDEF')

  for (let i = 1; i < sliceSize; i++) {
    colorsSheet.push('#' + colors.next().value)
  }

  return colorsSheet
}
