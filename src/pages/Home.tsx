import { Paper } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'

export function Home () {
  const [md, setMd] = useState('')
  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const { data } = await axios.get('https://raw.githubusercontent.com/russoedu/font-color-contrast/master/readme.md')
      setMd(data)
    }
    // Execute the created function directly
    anyNameFunction();
  }, [])
  return (
    <Paper className='demo' elevation={3}>
      <ReactMarkdown>{md}</ReactMarkdown>
    </Paper>
  )
}
