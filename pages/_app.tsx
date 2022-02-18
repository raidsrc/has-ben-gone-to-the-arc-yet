import '../styles/globals.css'
import "../styles/output.css"
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />

}

export default MyApp
