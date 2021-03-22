import React, { useEffect, useState, ReactNode, CSSProperties } from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from '../theme'
import './app.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  const [style, setStyle] = useState<CSSProperties>({
    visibility: 'hidden'
  })
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    setStyle({})
  }, [])

  return (
    <div style={style}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
