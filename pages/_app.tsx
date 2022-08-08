import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { createTheme, ThemeProvider } from '@mui/material'


const materialTheme = createTheme({
  palette:{
    primary:{
      main:"#D9D9D9"
    },
    secondary:{
      main:"#F71735"
    }
  }
})


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}:AppProps) {
  return (
    <ThemeProvider theme={materialTheme}>

    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </ThemeProvider>
  )
}