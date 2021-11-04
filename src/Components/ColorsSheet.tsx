import './ColorsSheet.css'
import fontColorContrast from 'font-color-contrast'
import generator from 'sequential-id-generator'


const colors = generator(6, '02468ACEF')
const testColors: string[] = []

for (const color of Array.from(colors)) {
  testColors.push('#' + color)
}

export function ColorsSheet (props: {slice: number, setSlice: React.Dispatch<React.SetStateAction<number>>}) {
  const spliceLimit = 336
  let i = 0

  function handleSlider(event: any) {
    props.setSlice(event.target.value);
  }

  const listColours = testColors.slice(props.slice * spliceLimit, props.slice * spliceLimit + spliceLimit).map((color) => {
      const divStyle = {
        backgroundColor: color,
        color: fontColorContrast(color),
      };
    return <div key={i++} className='color-block' style={divStyle}>{color}</div>
  });

  return (
    <>
      <div className="slidecontainer">
        <input
          type="range"
          className="slider"
          min="0"
          max={testColors.length / spliceLimit}
          value={props.slice}
          id="myRange"
          onChange={handleSlider}
        />
        <p>Page {Number(props.slice) + 1} of {(testColors.length / spliceLimit).toFixed(0)} (from {testColors[props.slice * spliceLimit]} to {testColors[props.slice * spliceLimit + spliceLimit - 1] || '#FFFFFF'}</p>
      </div>
      <div className='colors-sheet'>
        {listColours}
      </div>
    </>
  )
}