import { Snackbar, Tooltip } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useState, forwardRef, BaseSyntheticEvent, SyntheticEvent, ReactElement } from 'react'
import { FaCopy } from 'react-icons/fa'

import Prism  from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism.css'

import './Code.css'

export function Code ({ children, copy = false, ts = false}: {
  children: string,
  copy?: boolean,
  ts?: boolean,
}): JSX.Element {
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

  function highLight () {
    let content: ReactElement<any, any> | string
    if (ts && children) {
      const parsed = Prism.highlight(children, Prism.languages.typescript, 'typescript')
      content = <span dangerouslySetInnerHTML={{ __html: parsed }} />
    } else {
      content = children
    }
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
              <FaCopy />
              {content}
            </pre>
          </Tooltip>
        </>
      )
    } else {
      return (
        <pre>
          {content}
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
