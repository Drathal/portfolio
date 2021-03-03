import { FC } from 'react'
import Head from 'next/head'

import Header from './Header'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

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

      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={6}>
          <section className="layout">
            <Header />
            <div className="content">{children}</div>
          </section>
        </GridItem>
      </GridContainer>

      <footer>...</footer>
    </>
  )
}

export default Layout
