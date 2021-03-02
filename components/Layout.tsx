import { FC } from 'react'
import Head from 'next/head'

import Header from './Header'

interface IProps {
  pageTitle: string
}

const Layout: FC<IProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  )
}

export default Layout
