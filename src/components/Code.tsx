import { Snackbar, Tooltip } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useState, forwardRef, BaseSyntheticEvent, SyntheticEvent } from "react";
import { FaCopy } from 'react-icons/fa'
import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github.css'
import './Code.css'

hljs.registerLanguage('typescript', typescript)

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function Code (props: any) {
  const [open, setOpen] = useState(false)


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

    if (props.ts) {
      const content = hljs.highlight(props.content, {language: 'typescript'}).value
      return (
        <span dangerouslySetInnerHTML={{ __html: content }} />
      )
    } else {
      return props.children
    }
  }

  return (
    <>
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Copied
      </Alert>
    </Snackbar>
    <Tooltip title="Copy to clipboard">
      <pre className='copy-to-clipboard' onClick={handleClick}>
        {highLight()}
        <FaCopy />
      </pre>
    </Tooltip>
    </>
  )
}
