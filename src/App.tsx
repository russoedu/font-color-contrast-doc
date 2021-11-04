import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ColorsSheet } from './Components/ColorsSheet'
import { ColorDemo } from './Components/ColorDemo'
import 'react-tabs/style/react-tabs.css'
import { useState } from 'react'

function App() {
  const [sheetSlice, setSheetSlice] = useState(0)
  const [demoSlice, setDemoSlice] = useState(0)
  const [demoFontSlice, setDemoFontSlice] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>
          font-color-contrast demo app
        </h1>
      </header>
      <Tabs>
        <TabList>
          <Tab>Colors Sheet</Tab>
          <Tab>Color Demo</Tab>
        </TabList>

        <TabPanel>
          <ColorsSheet slice={sheetSlice} setSlice={setSheetSlice}/>
        </TabPanel>
        <TabPanel>
          <ColorDemo slice={demoSlice} setSlice={setDemoSlice} fontSlice={demoFontSlice} setFontSlice={setDemoFontSlice}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
