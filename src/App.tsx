import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ColorsSheet } from './Components/ColorsSheet'
import { ColorDemo } from './Components/ColorDemo'
import 'react-tabs/style/react-tabs.css'

function App() {
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
          <ColorsSheet/>
        </TabPanel>
        <TabPanel>
          <ColorDemo/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
