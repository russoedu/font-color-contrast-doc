import generator from 'sequential-id-generator'
import fontColorContrast from 'font-color-contrast'
import './ColorsSheet.css'
import { Slider } from '../components/Slider'
import { Container, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'

const sliceSize = 16 ** 2

export function ColorsSheet ({redStart, setRedStart, greenStart, setGreenStart }: {
  redStart: number,
  setRedStart: React.Dispatch<React.SetStateAction<number>>,
  greenStart: number,
  setGreenStart: React.Dispatch<React.SetStateAction<number>>,
}) {
  const [colorsSheet, setColorsSheet] = useState([''])
  const [colorsLoaded, setColorsLoaded] = useState(false)

  useEffect(() => {
    getColorsSheet(redStart, greenStart).then(sheet => {
      setColorsSheet(sheet)
      setColorsLoaded(true)
    })
  }, [redStart, greenStart])

  function page () {
    const color = <># <span className='red'>{toHex(redStart)}</span> <span className='green'>{toHex(greenStart)}</span></>
    return <p className='pagination'>from <pre>{color} <span className='blue'>00</span></pre> to <pre>{color} <span className='blue'>FF</span></pre></p>
  }


  function listColors () {
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
                value={redStart}
                setValue={setRedStart}
              />
              <Slider
                className='slider green-slider'
                min={0}
                max={255}
                value={greenStart}
                setValue={setGreenStart}
              />
              {page()}
            </Box>
            <Paper className='demo colors-sheet' elevation={3}>
              {listColors()}
            </Paper>
          </>
        }
    </Container>
  )
}

async function getColorsSheet (redStart: number, greenStart: number): Promise<string[]> {
  const red = toHex(redStart)
  const green = toHex(greenStart)

  const colorsSheet: string[] = ['#' + red + green + '00']
  const colors = generator(red + green + '00', '0123456789ABCDEF')

  for (let i = 1; i < sliceSize; i++) {
    colorsSheet.push('#' + colors.next().value)
  }

  return colorsSheet
}

function toHex (num: number) {
  const txt = Number(num).toString(16).toUpperCase()
  return '0'.repeat(2 - txt.length) + txt
}
