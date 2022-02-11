import { Container, Paper, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code } from '../components/Code';
import './Home.css'



export function Home () {
  const [exampleTab, setExampleTab] = useState('js');

  const handleExampleTabChange = (event: any, newValue: any) => {
    setExampleTab(newValue);
  };
  return (
    <Container className='container'>
      <Paper className='readme' elevation={3}>
        <h1>font-color-contrast</h1>
        <p>
          <a href='https://www.npmjs.com/package/font-color-contrast' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/a541dffe52f51f77d240db7203a491f55eaaba2b12cc190456d95696795ee021/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f666f6e742d636f6c6f722d636f6e74726173742e737667' alt='npm' data-canonical-src='https://img.shields.io/npm/v/font-color-contrast.svg'/>
          </a>
          <a href='https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml' target='_blank' rel='noreferrer'>
            <img src='https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml/badge.svg' alt='CI Pipeline'/>
          </a>
          <a href='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/build-status' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/f8a205550f1cdd1c2392196be46394495d5e4966a8c1cf9e15f30bd3057e1227/68747470733a2f2f7363727574696e697a65722d63692e636f6d2f672f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f6261646765732f6275696c642e706e673f623d6d6173746572' alt='Build Status' data-canonical-src='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/build.png'/>
          </a>
          <a href='https://coveralls.io/github/russoedu/font-color-contrast' target='_blank' rel='noreferrer'>
              <img src='https://camo.githubusercontent.com/e489fcf209af233f6b8e15eca9be16dbf5ebbbcef18ce767d1c10e8076963692/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f62616467652e7376673f6272616e63683d7473' alt='Coverage Status' data-canonical-src='https://coveralls.io/repos/github/russoedu/font-color-contrast/badge.svg' />
          </a>
          <a href='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/4006117bbba0c578c05fedad4b296974ce1f391fcd45e9e44372255a1118af0c/68747470733a2f2f7363727574696e697a65722d63692e636f6d2f672f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f6261646765732f7175616c6974792d73636f72652e706e673f623d6d6173746572' alt='Scrutinizer Code Quality' data-canonical-src='https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/quality-score.png' />
          </a>
          <a href="https://codeclimate.com/github/russoedu/font-color-contrast/maintainability" target='_blank' rel='noreferrer'>
            <img src="https://api.codeclimate.com/v1/badges/daed002166b4a0404ea5/maintainability" alt='Code Climate code quality'/>
          </a>
          <a href="https://www.codacy.com/gh/russoedu/font-color-contrast/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=russoedu/font-color-contrast&amp;utm_campaign=Badge_Grade" target='_blank' rel='noreferrer'>
            <img src="https://app.codacy.com/project/badge/Grade/320aed91c5c5438397df48b1cc85cc8a" alt='Codacy code quality'/>
          </a>
          <a href='https://snyk.io/test/npm/font-color-contrast' target='_blank' rel='noreferrer'>
            <img src='https://camo.githubusercontent.com/77980cfc13198e616164c295c2ef0ef3fe9d4d4ad0342487847401cd09bfeb02/68747470733a2f2f736e796b2e696f2f746573742f6e706d2f666f6e742d636f6c6f722d636f6e74726173742f62616467652e737667' alt='Known Vulnerabilities' data-canonical-src='https://snyk.io/test/npm/font-color-contrast/badge.svg' />
          </a>
        </p>

        <p><strong>font-color-contrast</strong> is a JavaScript module to help you select black or white for a font according to the brightness of the background color to give you the best possible contrast and readability.</p>
        <h2>How does it work</h2>
        <p><strong>font-color-contrast</strong> uses the algorythm described in the article <a href='https://alienryderflex.com/hsp.html' target='_blank' rel='noreferrer'>HSP Color Model — Alternative to HSV (HSB) and HSL</a> where brightness is described as</p>
        <img className='formula' alt='brightness = sqrt(0.299 * red^2 + 0.587 * green^2 + 0.114 * blue^2)' src='https://render.githubusercontent.com/render/math?math=brightness=\sqrt{0.299 * red^2 %2B 0.587 * green^2 %2B 0.114 * blue^2}' />
        <p>Any brightness smaller than 50% means the background is dark.</p>
        <p>Any brightness bigger than 50% means the background is light.</p>
        <p>This way, <strong>font-color-contrast</strong> will (with the default threshold of 0.5) return white (<code>'#ffffff'</code>) for dark brightness and black (<code>'#000000'</code>) for light brightness.</p>
        <p>You can change this default behaviour by passing the optional <code>threshold</code> parameter, so the comparison will be with the value you passed, not with 50%.</p>
        <h2>Installation</h2>
        <Code copy>
          npm i font-color-contrast
        </Code>
        <h2>Usage</h2>
        <p>You can use <strong>font-color-contrast</strong> 4 ways:</p>
        <ul>
          <li>with a named CSS color</li>
          <li>with a hexadecimal color string</li>
          <li>with a color number</li>
          <li>with separate RGB color numbers</li>
          <li>with an array of RGB color numbers</li>
        </ul>
        <p>An optional parameter for contrast (<code>threshold</code>, from 0 to 1) can be used on all options.</p>

        <h3>Named CSS color</h3>
        <Code
          ts
        >
  {`/**
 * @param cssColor The CSS named color string. The list of colors is defined as a TypeScript type to help the usage.
 * @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
 */
function fontColorContrast (cssColor: CssColor, threshold?: number): '#ffffff' | '#000000'`}
        </Code>
        <Code
          ts
          copy
        >
  {`import fontColorContrast from 'font-color-contrast'

const fc1 = fontColorContrast('deepskyblue') // '#000000'

const fc2 = fontColorContrast('darkslateblue') // '#FFFFFF'`}
        </Code>

        <h3>Hexadecimal color string</h3>
        <Code
          ts
        >
  {`/**
 * @param hex The hex color string must be a valid hexadecimal color number to work correctly. Works with or without '#', with 3 or 6 color chars. Any other length or an invalid hex character will be ignored. A space is allowed between the hash symbol and the number.
 * @param threshold Contrast thres
 */
function fontColorContrast (hex: string, threshold?: number): '#ffffff' | '#000000'`}
        </Code>
        <p>It can have the hash symbol or not, and use 6 or 3 characters. The <code>threshold</code> parameter is optional.</p>
        <Code
          ts
          copy
        >
  {`import fontColorContrast from 'font-color-contrast'

const fc1 = fontColorContrast('#00CC99') // '#000000'

const fc2 = fontColorContrast('#0C9') // '#000000'

const fc3 = fontColorContrast('00CC99') // '#000000'
const fc4 = fontColorContrast('00CC99', 0.7) // '#ffffff'`}
        </Code>

        <h3>Color number</h3>
        <Code
          ts
        >
  {`/**
 * @param hex The hex color number must be an integer between 0 and 0xffffff (16777215).
 * @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
 */
function fontColorContrast (hex: number, threshold?: number): '#ffffff' | '#000000'`}
        </Code>
        <p>The number can be a hexadecimal or an integer. The <code>threshold</code> parameter is optional.</p>
        <Code
          ts
          copy
        >
  {`import fontColorContrast from 'font-color-contrast'

const fc1 = fontColorContrast(0x00cc99) // '#000000'

const fc2 = fontColorContrast(52377) // '#000000'
const fc3 = fontColorContrast(52377, 0.7) // '#ffffff'`}
        </Code>

        <h3>Separate RGB color number</h3>
        <Code
          ts
        >
  {`/**
 * @param red The red portion of the color. Must be an integer between 0 and 255.
 * @param green The green portion of the color. Must be an integer between 0 and 255.
 * @param blue The blue portion of the color. Must be an integer between 0 and 255.
 * @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
 */
function fontColorContrast (red: number, green: number, blue: number, threshold?: number): '#ffffff' | '#000000'`}
        </Code>
        <p>Again, each number can be a hexadecimal or an integer and you can mix it. The <code>threshold</code> parameter is optional.</p>
        <Code
          ts
          copy
        >
  {`import fontColorContrast from 'font-color-contrast'

const fc1 = fontColorContrast(0x0, 0xcc, 0x99) // '#000000'

const fc2 = fontColorContrast(0, 204, 153) // '#000000'
const fc3 = fontColorContrast(0, 204, 153, 0.7) // '#ffffff'

const fc4 = fontColorContrast(0, 0xcc, 153) // '#000000'
const fc5 = fontColorContrast(0, 0xcc, 153, 0.7) // '#ffffff'`}
        </Code>

        <h3>Array of RGB color number</h3>
        <Code
          ts
        >
  {`/**
 * @param rgbArray Array with red, green and blue. Each value must be an integer between 0 and 255.
 * @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
 */
function fontColorContrast(rgbArray: number[], threshold?: number): '#ffffff' | '#000000'`}
        </Code>
        <p>Each number can be a hexadecimal or an integer and you can mix it. The <code>threshold</code> parameter is optional.</p>
        <Code
          ts
          copy
        >
  {`import fontColorContrast from 'font-color-contrast'

const fc1 = fontColorContrast([0x0, 0xcc, 0x99]) // '#000000'

const fc2 = fontColorContrast([0, 204, 153]) // '#000000'
const fc3 = fontColorContrast([0, 204, 153], 0.7) // '#ffffff'

const fc4 = fontColorContrast([0, 0xcc, 153]) // '#000000'
const fc5 = fontColorContrast([0, 0xcc, 153], 0.7) // '#ffffff'`}
        </Code>

        <h2>Ready to go examples</h2>
        <Box sx={{ width: '100%' }}>
            <Tabs
              value={exampleTab}
              onChange={handleExampleTabChange}
              aria-label="wrapped label tabs example"
            >
              <Tab value="js" label="JS" />
              <Tab value="react" label="React" />
            </Tabs>
          </Box>
          {exampleTab === 'js'
            ? <Code
                ts
                copy
              >{`import fontColorContrast from 'font-color-contrast'

const bgColor = '#fc7a34'
const fontColor = fontColorContrast(bgColor)

const content = \`<p style="background-color: \${bgColor}; color: \${color};">Content here</p>\`
`}
              </Code>
            : <Code
                ts
                copy
              >{`import fontColorContrast from 'font-color-contrast'
import { useState } from 'react'

export function ColorPicker () {
const [color, setColor] = useState('#fc12f4')

function handleColorChange (event: any) {
  setColor(event.target.value)
}

  return (
    <div>
      <input type="color" name="background" value={color} onChange={handleColorChange}/>
      <p style={{
        backgroundColor: color,
        color: fontColorContrast(color),
      }}
      >
        Content here
      </p>
    </div>
  )
}
`}
              </Code>
          }
        <p>Check it in action on <Link to='/sheet'>Color sheet</Link>, <Link to='/css-sheet'>CSS color sheet</Link> or on <Link to='/picker'>Color picker</Link>.</p>
        <h2>Tests</h2>
        <p>Tests made using <a href='https://jestjs.io/' target='_blank' rel='noreferrer'>Jest</a>.</p>
        <h2>Version history</h2>
        <h3>0 -{'>'} 8.1.1</h3>
        <p>JavaScript version, accepting strings for RGB</p>
        <h3>9.0.0 -{'>'} 9.0.2</h3>
        <p>TypeScript version.</p>
        <p>Only numbers are now accepted as params when using array or RGB, because it was impossible to know if the string was decimal or hexadecimal. Accepting only numbers we can be sure the correct values are being used to calculate the contrast.</p>
        <h3>9.1.0</h3>
        <p>Updated algorithm from <a href='https://alienryderflex.com/hsp.html' target='_blank' rel='noreferrer'>https://alienryderflex.com/hsp.html</a> with new thresholds for better contrast.</p>
        <h3>10.0.0</h3>
        <p>Included the optional threshold parameter (thanks, <a href='https://github.com/franciscohanna92' target='_blank' rel='noreferrer'>franciscohanna92</a>).</p>
        <h3>10.0.1</h3>
        <p>Changed target to ES2015</p>
        <h3>10.1.0</h3>
        <p>Fixed package instalation from the new TS version</p>
        <h3>11.0.0</h3>
        <p>Many improved checks to make sure the color is a valid set color and recreated all tests. The function now encapsulates a function in a class.</p>
        <p>CSS named colors can now be passed as a param.</p>
        <h3>11.0.1</h3>
        <p>Checking if the color numbers are integer.</p>
      </Paper>
    </Container>
  )
}
