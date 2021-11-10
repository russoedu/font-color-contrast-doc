import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ColorsSheet } from './pages/ColorsSheet'
import { ColorPicker } from './pages/ColorPicker'
import { Home } from './pages/Home'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

export function App() {
  const [sheetSlice, setSheetSlice] = useState(0)
  const [demoSlice, setDemoSlice] = useState(0)
  const [demoFontSlice, setDemoFontSlice] = useState(7)
  const [color, setColor] = useState('#df00ff')

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
              slice={demoSlice}
              setSlice={setDemoSlice}
              fontSlice={demoFontSlice}
              setFontSlice={setDemoFontSlice}
              color={color}
              setColor={setColor}
            />}
          />
          <Route
            path='/sheet'
            element={<ColorsSheet
              slice={sheetSlice}
              setSlice={setSheetSlice}
            />}
          />
        </Routes>
      </CssBaseline>
    </BrowserRouter>
  )
}
