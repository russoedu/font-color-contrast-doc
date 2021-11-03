import fontColorContrast from 'font-color-contrast'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import './ColorDemo.css'

export function ColorDemo () {
  const [color, setColor] = useState('#df00ff')
  const fontFamilies = [
    'serif',
    'sans-serif',
    'cursive',
    'fantasy',
    'monospace',
    'Andale Mono',
    'Arial',
    'Arial Black',
    'Comic Sans MS',
    'Courier New',
    'Georgia',
    'Impact',
    'Monotype.com',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'Times',
    'Helvetica',
    'Courier',
  ]

  const fontSizes = [
    'xx-small',
    'x-small',
    'small',
    'medium',
    'large',
    'x-large',
    'xx-large',
    '6pt',
    '7pt',
    '8pt',
    '9pt',
    '10pt',
    '11pt',
    '12pt',
    '14pt',
    '16pt',
    '18pt',
    '20pt',
  ]

  const colorStyle = {
    backgroundColor: color,
    backgroundImage: `linear-gradient(to right, white 220px, ${color} 240px)`,
    color: fontColorContrast(color)
  }

  const content = fontFamilies.map(font => {
    const sizesText = fontSizes.map(size =>{
      return(
        <p style={{ fontSize: size }}>This is {size}</p>
      )
    })
    return (
      <div style={{ fontFamily: font, color: fontColorContrast(color) }}>
        <h1 className='font-name'>Font: {font}</h1>
        <p>The quick brown fox jumped over the lazy dog. The quick brown fox
        jumped over the lazy dog. The quick brown fox jumped over the lazy
        dog. The quick brown fox jumped over the lazy dog.</p>
        {sizesText}
      </div>
    )
  })
  return (
    <div className='demo-container'>
      <div className='color-picker'>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
      <div className='demo-bg' style={colorStyle}>
        {content}
      </div>
    </div>
  )
}