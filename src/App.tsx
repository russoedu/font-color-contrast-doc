import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header'
import { ColorsSheet } from './Components/ColorsSheet'
import { ColorPicker } from './Components/ColorPicker'
import './App.css'

function App() {
  const [sheetSlice, setSheetSlice] = useState(0)
  const [demoSlice, setDemoSlice] = useState(0)
  const [demoFontSlice, setDemoFontSlice] = useState(0)
  const [color, setColor] = useState('#df00ff')

  return (
    <BrowserRouter>
      <Header></Header>
      <div>
        <Routes>
          <Route
            path="/picker"
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
            path="/"
            element={<ColorsSheet
              slice={sheetSlice}
              setSlice={setSheetSlice}
            />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
