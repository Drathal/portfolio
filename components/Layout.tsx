import { FC } from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './Header'
import Starfield from './Starfield'
interface IProps {
  pageTitle: string
}

const Layout: FC<IProps> = ({ children, pageTitle }) => {
  return (
    <>
      <CssBaseline />
      <Starfield />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <Container fixed>
        <section className="layout">
          <div className="content">{children}</div>
        </section>
      </Container>

      <footer></footer>
    </>
  )
}

export default Layout
