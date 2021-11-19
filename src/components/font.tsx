import { MenuItem } from "@mui/material"

export const fontFamilies = [
  'Andale Mono',
  'Arial Black',
  'Arial',
  'Comic Sans MS',
  'Courier',
  'cursive',
  'fantasy',
  'Georgia',
  'Helvetica',
  'Impact',
  'monospace',
  'Roboto',
  'sans-serif',
  'serif',
  'system-ui',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
]

export const fontSizes = [
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
  '24pt',
]

export const fontOptions = fontFamilies.map((font, index) => {
  return(<MenuItem style={{ fontFamily: font }}key={'font-' + font} value={index}>{font}</MenuItem>)
})

export const sizeOptions = fontSizes.map((size, index) => {
  return(<MenuItem key={'size-' + size} value={index}>{size}</MenuItem>)
})
