# font-color-contrast

[![npm](https://img.shields.io/npm/v/font-color-contrast.svg)](https://www.npmjs.com/package/font-color-contrast)
[![CI Pipeline](https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml/badge.svg)](https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml)
[![Build Status](https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/build.png?b=master)](https://scrutinizer-ci.com/g/russoedu/font-color-contrast/build-status/master)
[![Coverage Status](https://coveralls.io/repos/github/russoedu/font-color-contrast/badge.svg?branch=ts)](https://coveralls.io/github/russoedu/font-color-contrast?branch=ts)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/russoedu/font-color-contrast/?branch=master)
[![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.svg)](https://codeclimate.com/github/russoedu/font-color-contrast)
[![Known Vulnerabilities](https://snyk.io/test/npm/font-color-contrast/badge.svg)](https://snyk.io/test/npm/font-color-contrast)

font-color-contrast is a JavaScript module to help you select black or white for a font according to the brightness of the background color to give you the best possible contrast and readability.

### How does it work

font-color-contrast uses the algorythm described in the article [HSP Color Model — Alternative to HSV (HSB) and HSL](https://alienryderflex.com/hsp.html) where brightness is described as 

<p>
  <img src="https://render.githubusercontent.com/render/math?math=brightness=\sqrt{0.299 * red^2 %2B 0.587 * green^2 %2B 0.114 * blue^2}">
</p>

> Any brightness smaller than 50% means the background is dark.

> Any brightness bigger than 50% means the background is light.

This way, font-color-contrast will (with the default threshold of 0.5) return white (`'#ffffff'`) for dark brightness and black (`'#000000'`) for light brightness.

You can change this default behaviour by passing the optional `threshold` parameter, so the comparison will be with the value you passed, not with 50%.


## Installation

    $ npm i font-color-contrast

## Usage

You can use the module 4 ways, with an optional parameter for contrast threshold (from 0 to 1).

### Hexadecimal color string

```Typescript
/**
 * @param hex The hex color string that must be a valid hexadecima color number to work correctly. Works with or without '#', with 3 or 6 color chars.
 * @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
 */
 function fontColorContrast (hex: string, threshold?: number): '#ffffff' | '#000000'
```

It can have the hash symbol or not, and use 6 or 3 characters. The `threshold` parameter is optional.

```Typescript
import fontColorContrast from 'font-color-contrast'

const myStringWithHash = '#00CC99'
const fc1 = fontColorContrast(myStringWithHash) // '#000000'

const myStringWithHash3 = '#0C9'
const fc2 = fontColorContrast(myStringWithHash) // '#000000'

const myStringWithoutHash = '00CC99'
const fc3 = fontColorContrast(myStringWithoutHash) // '#000000'
const fc4 = fontColorContrast(myStringWithoutHash, 0.7) // '#ffffff'
```

### with a color number

```Typescript
/**
 * @param hex The hex color number that must be a valid hexadecimal color number.
 * @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
 */
function fontColorContrast (hex: number, threshold?: number): '#ffffff' | '#000000'
```

The number can be a hexadecimal or an integer. The `threshold` parameter is optional.

```Typescript
import fontColorContrast from 'font-color-contrast'

const myHexNumber = 0x00cc99
const fc1 = fontColorContrast(myHexNumber) // '#000000'

const myIntNumber = 52377 // = 0x00cc99
const fc2 = fontColorContrast(myIntNumber) // '#000000'
const fc3 = fontColorContrast(myIntNumber, 0.7) // '#ffffff'
```

### with an array of numbers with the RGB color

```Typescript
/**
 * @param redGreenBlue Array with red, green and blue. Each value must be a number between 0 and 255.
 * @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
 */
function fontColorContrast(redGreenBlue: number[], threshold?: number): '#ffffff' | '#000000'
```

Each number can be a hexadecimal or an integer and you can mix it. The `threshold` parameter is optional.

```Typescript
import fontColorContrast from 'font-color-contrast'

const myHexArray = [0x0, 0xcc, 0x99]
const fc1 = fontColorContrast(myHexArray) // '#000000'

const myIntArray = [0, 204, 153]
const fc2 = fontColorContrast(myIntArray) // '#000000'
const fc3 = fontColorContrast(myIntArray, 0.7) // '#ffffff'

const myMixedArray = [0, 0xcc, 153]
const fc4 = fontColorContrast(myMixedArray) // '#000000'
const fc5 = fontColorContrast(myMixedArray, 0.7) // '#ffffff'
```

### with the RGB color numbers:
```Typescript
/**
 * @param red The red portion of the color. Must be a number between 0 and 255.
 * @param green The green portion of the color. Must be a number between 0 and 255.
 * @param blue The blue portion of the color. Must be a number between 0 and 255.
 * @example fontColorContrast('00', 'F3', D8) === fontColorContrast(0, 243, 216) === fontColorContrast(0x0, 0xF3, 0xd8).
 */
function fontColorContrast (red: number, green: number, blue: number, threshold?: number): '#ffffff' | '#000000'
```

Again, each number can be a hexadecimal or an integer and you can mix it. The `threshold` parameter is optional.

```Typescript
import fontColorContrast from 'font-color-contrast'

const fc1 = fontColorContrast(0x0, 0xcc, 0x99) // '#000000'

const fc2 = fontColorContrast(0, 204, 153) // '#000000'
const fc3 = fontColorContrast(0, 204, 153, 0.7) // '#ffffff'

const fc4 = fontColorContrast(0, 0xcc, 153) // '#000000'
const fc5 = fontColorContrast(0, 0xcc, 153, 0.7) // '#ffffff'
```

## Tests

Tests made using [Jest](https://jestjs.io/).

## Examples

Check the examples on [Color sheet demo](/sheet) or [Color picker demo](/picker).

## Version history

### 0 -> 8.1.1
JavaScript version, accepting strings for RGB

### 9.0.0 -> 9.0.2
TypeScript version.

Only numbers are now accepted as params when using array or RGB, because it was impossible to know if the string was decimal or hexadecimal. Accepting only numbers we can be sure the correct values are being used to calculate the contrast.

### 9.1.0
Updated algorithm from https://alienryderflex.com/hsp.html with new thresholds for better contrast.

### 10.0.0
Included the optional threshold parameter (thanks, [franciscohanna92](https://github.com/franciscohanna92)).

### 10.0.1
Changed target to ES2015

### 10.1.0
Fixed package instalation from the new TS version
