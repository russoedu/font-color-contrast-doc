import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ColorsSheet } from './pages/ColorsSheet'
import { ColorPicker } from './pages/ColorPicker'
import { Home } from './pages/Home'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import { CssColorsSheet } from './pages/CssColorsSheet'

export function App() {
  const [sheetSlice, setSheetSlice] = useState(0)
  const [fontIndex, setFontIndex] = useState(0)
  const [sizeIndex, setSizeIndex] = useState(7)
  const [pickerColor, setPickerColor] = useState('#121212')

  return (
    <BrowserRouter>
      <CssBaseline>
        <Header></Header>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
          <Route
            path='/picker'
            element={<ColorPicker
              fontIndex={fontIndex}
              setFontIndex={setFontIndex}
              sizeIndex={sizeIndex}
              setSizeIndex={setSizeIndex}
              color={pickerColor}
              setColor={setPickerColor}
            />}
          />
          <Route
            path='/sheet'
            element={<ColorsSheet
              slice={sheetSlice}
              setSlice={setSheetSlice}
            />}
          />
          <Route
            path='/css-sheet'
            element={<CssColorsSheet/>}
          />
        </Routes>
      </CssBaseline>
    </BrowserRouter>
  )
}
