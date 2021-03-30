import React, { useEffect, useState, ReactNode, CSSProperties } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProps } from 'next/app'

import { ThemeProvider } from '../theme'
import './app.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  const queryClient = new QueryClient()
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
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
