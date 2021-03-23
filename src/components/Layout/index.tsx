import { FC } from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../Header'
import Starfield from '../Starfield'
interface IProps {
  pageTitle: string
}

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2rem',
    position: 'relative'
  }
}))

const Layout: FC<IProps> = ({ children, pageTitle }) => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Starfield />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <Container fixed className={classes.container}>
        {children}
      </Container>
    </>
  )
}

export default Layout
