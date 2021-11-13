import { Snackbar, Tooltip } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useState, forwardRef, BaseSyntheticEvent, SyntheticEvent } from 'react'
import { FaCopy } from 'react-icons/fa'

// import hljs from 'highlight.js'
// import typescript from 'highlight.js/lib/languages/typescript'
// import 'highlight.js/styles/github.css'

import Prism  from 'prismjs'
// import loadLanguages from 'prismjs/components/';
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism.css'

import './Code.css'

// loadLanguages(['ts'])
// hljs.registerLanguage('typescript', typescript)



export function Code ({ children, copy = false, ts = false}: { children: string, copy?: boolean, ts?: boolean }): JSX.Element {
  const [open, setOpen] = useState(false)

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  })

  function handleClick (event: BaseSyntheticEvent) {
    navigator.clipboard.writeText(event.target.textContent)
    setOpen(true);
  }

  function handleClose (event?: SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  function getData () {
    if (ts && children) {
      const content = Prism.highlight(children, Prism.languages.typescript, 'typescript')

      // const content = hljs.highlight(children, {language: 'typescript'}).value
      return (
        <span dangerouslySetInnerHTML={{ __html: content }} />
      )
    } else {
      return children
    }
  }

  function highLight () {
    if (copy) {
      return (
        <>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
              Copied
            </Alert>
          </Snackbar>
          <Tooltip title='Copy to clipboard'>
            <pre className='copy-to-clipboard' onClick={handleClick}>
              {getData()}
              <FaCopy />
            </pre>
          </Tooltip>
        </>
      )
    } else {
      return (
        <pre>
          {getData()}
        </pre>
      )
    }
  }

  return (
    <>
      {highLight()}
    </>
  )
}
