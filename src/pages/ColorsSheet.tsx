import generator from 'sequential-id-generator'
import fontColorContrast from 'font-color-contrast'
import './ColorsSheet.css'
import { Slider } from '../components/Slider'
import { Container, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'

let savedColors: false | string[] = false
const sliceSize = 16 ** 2
const maxSlices = sliceSize ** 2 - 1

export function ColorsSheet ({slice, setSlice }: {
  slice: number,
  setSlice: React.Dispatch<React.SetStateAction<number>>,
}) {
  const [testColorsOld, setTestColorsOld] = useState([''])
  const [colorsSheet, setColorsSheet] = useState([''])
  const [sheetStart, setSheetStart] = useState('000000')
  const [colorsLoaded, setColorsLoaded] = useState(false)

  useEffect(() => {
    getColorsArrayOld().then(testColorsResult => {
      setTestColorsOld(testColorsResult)
      setColorsLoaded(true)
    })
  }, [])

  useEffect(() => {
    getSlice(slice).then(start => {
      setSheetStart(start)
    })
  }, [slice])
  useEffect(() => {
    getColorsSheet(sheetStart).then(sheet => {
      setColorsSheet(sheet)
    })
  }, [sheetStart])


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
        ? <div>Loading sheet with {testColorsOld.length.toLocaleString()} colors, this might take a while</div>
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
                max={maxSlices}
                value={slice}
                setValue={setSlice}
                />
              <p className='pagination'>Page {(Number(slice) + 1).toLocaleString()} of {(maxSlices + 1).toLocaleString()} (from #{sheetStart} to {sheetStart.substring(0, 4) + 'FF'})</p>
            </Box>
            <Paper className='demo colors-sheet' elevation={3}>
              {listColors()}
            </Paper>
          </>
        }
    </Container>
  )
}

function getColorsArrayOld (): Promise<string[]> {
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
async function getColorsSheet (start: string): Promise<string[]> {
    console.log('start', start)
    const testColors: string[] = ['#' + start]
    const colors = generator(start, '0123456789ABCDEF')

    for (let i = 1; i < sliceSize; i++) {
      testColors.push('#' + colors.next().value)
    }

    console.log(testColors)

    return testColors
}

async function getSlice (slice: number): Promise<string> {
  const num = (slice * sliceSize).toString(16).toUpperCase()
  const start = '0'.repeat(6 - num.length) + num
  return start
}
