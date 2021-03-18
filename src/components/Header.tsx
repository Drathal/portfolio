import Link from 'next/link'
import { FC } from 'react'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: 'rgba(0,0,0,0.8)'
    },
    rootZoom: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
)

function ScrollTop(props: Props) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.rootZoom}
      >
        {children}
      </div>
    </Zoom>
  )
}

const Header: FC = () => {
  const classes = useStyles()
  return (
    <>
      <nav className="nav">
        <AppBar
          classes={{
            root: classes.appBar
          }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link href="/">
                <a>Markus Dethlefsen</a>
              </Link>
            </Typography>

            <Button color="inherit">
              <Link href="/">
                <a>Timeline</a>
              </Link>
            </Button>

            <Button color="inherit">
              <Link href="/about">
                <a>About</a>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </nav>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default Header
