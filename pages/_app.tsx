import '../styles/globals.css'
import "../styles/output.css"
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} >
    <Head>
      <link rel="shortcut icon" href='/icons8-question-mark-90.png' key="favicon"/>
    </Head>
  </Component>

}

export default MyApp
