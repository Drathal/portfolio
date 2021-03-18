import { FC } from 'react'
import { GetStaticProps } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/Layout'

interface IProps {
  title: string
  description: string
}

const useStyles = makeStyles(() => ({
  title: {
    position: 'relative',
    color: '#c9eafd',
    textShadow: '0px 2px 5px #000',
    '& span:nth-child(1)': {
      position: 'absolute',
      top: '0x',
      left: '0',
      clipPath: 'polygon(0 45%, 100% 45%, 100% 60%, 0 60%)',
      zIndex: 1,
      color: '#a4dafa',
      textShadow: 'none'
    },
    '& span:nth-child(2)': {
      position: 'absolute',
      top: '0',
      left: '0',

      clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)',
      zIndex: 1,
      color: '#90d6ff',
      textShadow: 'none'
    }
  },
  portrait: {
    width: '400px',
    height: '400px',
    position: 'absolute',
    margin: 'auto',
    left: 0
  },
  planet: {
    backgroundImage: `radial-gradient(top, circle cover,     rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%,  rgba(0,0,0,1) 100%), url("markus-dethlefsen.png")`,
    // radial-gradient(top, circle cover,     rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%,  rgba(0,0,0,1) 100%),
    // radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)
    width: '180px',
    height: '180px',
    position: 'absolute',
    top: '110px',
    left: '110px',
    borderRadius: '50%'
  },
  ring: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: `radial-gradient(ellipse at center,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) 40%,
      #0069a7 41%,
      #5288a7 43%,
      #0069a7 45%,
      #046aa5 47%,
      #0069a7 48%,
      #034a74 51%,
      #0069a7 54%,
      #002b44 57%,
      #0069a7 60%,
      #003655 62%,
      #266285 64%,
      #1b648f 67%,
      #0a2a3d 68%,
      #0069a7 70%,
      #ff000000 71%,
      rgba(0,0,0,0) 72%,
      rgba(0,0,0,0) 100%)`,
    transform: 'rotateX(75deg) skewY(37deg)'
  },
  top: {
    clip: 'rect(0px, 180px, 90px, 0px)'
  },
  bottom: {
    clip: 'rect(90px, 180px, 180px, 0px)'
  }
}))

const About: FC<IProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <Layout pageTitle={`${title} | About`}>
      <Typography variant="h3" component="h2" className={classes.title}>
        <span aria-hidden="true">Markus Dethlefsen</span>
        Markus Dethlefsen
        <span aria-hidden="true">Markus Dethlefsen</span>
      </Typography>

      <div className={classes.portrait}>
        <div className={classes.planet + ' ' + classes.bottom}></div>
        <div className={classes.ring}></div>
        <div className={classes.planet + ' ' + classes.top}></div>
      </div>

      <Typography variant="body1" color="textSecondary" component="span">
        Senior Software Developer bei FFG Finanzcheck Finanzportale GmbH
      </Typography>
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import(`../../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    } as IProps
  }
}
