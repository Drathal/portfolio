import React, { useEffect, useState, ReactNode, CSSProperties } from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from '../theme'
import styles from '../theme/App.module.css'

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
    <div className={styles['app-container']} style={style}>
      <ThemeProvider>
        <div className={styles['content-container']}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
