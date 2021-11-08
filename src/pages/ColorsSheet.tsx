import generator from 'sequential-id-generator'
import fontColorContrast from 'font-color-contrast'
import './ColorsSheet.css'
import { Slider } from '../components/Slider'


const colors = generator(6, '02468ACEF')
const testColors: string[] = []

for (const color of Array.from(colors)) {
  testColors.push('#' + color)
}

export function ColorsSheet ({slice, setSlice }: {
    slice: number,
    setSlice: React.Dispatch<React.SetStateAction<number>>
  }) {
  const spliceLimit = 437
  let i = 0

  const listColours = testColors.slice(slice * spliceLimit, slice * spliceLimit + spliceLimit).map((color) => {
      const divStyle = {
        backgroundColor: color,
        color: fontColorContrast(color),
      };
    return <div key={i++} className='color-block' style={divStyle}>{color}</div>
  });

  return (
    <>
      <div className='slider-container'>
        <Slider
          className='slider'
          min={0}
          max={testColors.length / spliceLimit}
          value={slice}
          setValue={setSlice}
          />
        <p>Page {Number(slice) + 1} of {(testColors.length / spliceLimit).toFixed(0)} (from {testColors[slice * spliceLimit]} to {testColors[slice * spliceLimit + spliceLimit - 1] || '#FFFFFF'}</p>
      </div>
      <div className='colors-sheet'>
        {listColours}
      </div>
    </>
  )
}