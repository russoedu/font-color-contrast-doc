import generator from 'sequential-id-generator'
import fontColorContrast from 'font-color-contrast'
import './ColorsSheet.css'
import { Slider } from '../components/Slider'
import { Paper } from '@mui/material'
import { useEffect, useState } from 'react'

export function ColorsSheet ({slice, setSlice }: {
  slice: number,
  setSlice: React.Dispatch<React.SetStateAction<number>>
}) {
  const [testColors, setTestColors] = useState([''])
  const sliceSize = getSliceSize()

  useEffect(() => {
    const testColorsResult = getColorsArray()
    setTestColors(testColorsResult)
  }, [])

  function listColors () {
    let i = 0
    return testColors.slice(slice * sliceSize, slice * sliceSize + sliceSize).map((color) => {
        const divStyle = {
          backgroundColor: color,
          color: fontColorContrast(color),
        }
      return <div key={i++} className='color-block' style={divStyle}>{color}</div>
    })
  }

  return (
    <>
      <div className='slider-container'>
        <Slider
          className='slider'
          min={0}
          max={Math.floor(testColors.length / sliceSize)}
          value={slice}
          setValue={setSlice}
          />
        <p>Page {Number(slice) + 1} of {(testColors.length / sliceSize).toFixed(0)} (from {testColors[slice * sliceSize]} to {testColors[slice * sliceSize + sliceSize - 1] || '#FFF'}</p>
      </div>
      <Paper className='demo container colors-sheet' elevation={3}>
        {listColors()}
      </Paper>
    </>
  )
}

function getColorsArray () {
  const colors = generator(3, '0123456789ABCDEF')
  const testColors: string[] = []

  for (const color of Array.from(colors)) {
    testColors.push('#' + color)
  }

  return testColors
}

function getSliceSize () {
  const spaceLeft = (Number(((window.innerHeight - 48 - 65) / 40).toFixed(0)) - 1)
  return 16 * spaceLeft
}
