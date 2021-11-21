import generator from 'sequential-id-generator'
import fontColorContrast from 'font-color-contrast'
import './ColorsSheet.css'
import { Slider } from '../components/Slider'
import { Container, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'

let savedColors: false | string[] = false

export function ColorsSheet ({slice, setSlice }: {
  slice: number,
  setSlice: React.Dispatch<React.SetStateAction<number>>,
}) {
  const [testColors, setTestColors] = useState([''])
  const [colorsLoaded, setColorsLoaded] = useState(false)
  const sliceSize = 16 * 16

  useEffect(() => {
    getColorsArray().then(testColorsResult => {
      setTestColors(testColorsResult)
      setColorsLoaded(true)
    })
  }, [])

  function listColors () {
    let i = 0
    return testColors.slice(slice * sliceSize, slice * sliceSize + sliceSize).map((bgColor) => {
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
        ? <div>Loading sheet with {testColors.length.toLocaleString()} colors, this might take a while</div>
        : <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'left',
                flexWrap: 'wrap',
                padding: '1em 0',
              }}
            >
              <Slider
                className='slider'
                min={0}
                max={testColors.length / sliceSize - 1}
                value={slice}
                setValue={setSlice}
                />
              <p className='pagination'>Page {Number(slice) + 1} of {(testColors.length / sliceSize).toFixed(0)} (from {testColors[slice * sliceSize]} to {testColors[slice * sliceSize + sliceSize - 1] || '#FFFFF'})</p>
            </Box>
            <Paper className='demo colors-sheet' elevation={3}>
              {listColors()}
            </Paper>
          </>
        }
    </Container>
  )
}

function getColorsArray (): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (savedColors) {
      resolve(savedColors)
    } else {
      const testColors: string[] = []
      const colors = generator(3, '0123456789ABCDEF')

      for (const color of Array.from(colors)) {
        testColors.push('#' + color)
      }
      savedColors = testColors
      resolve(testColors)
    }
  })
}
