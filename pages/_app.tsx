import { AppProps } from 'next/app'
import { hydrate, setup } from 'otion'

import options from '../otion.config'

if (typeof window !== 'undefined') {
  setup(options)
  hydrate()
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
)

export default MyApp
