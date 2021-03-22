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
    textShadow: '0px 2px 5px #000'
  },
  portrait: {
    width: '400px',
    height: '400px',
    position: 'relative',
    margin: '0 auto',
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
  bottom: {
    clip: 'rect(0px, 180px, 90px, 0px)'
  },
  top: {
    clip: 'rect(90px, 180px, 180px, 0px)'
  }
}))

const About: FC<IProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <Layout pageTitle={`${title} | About`}>
      <Typography variant="h3" component="h2" className={classes.title}>
        Markus Dethlefsen
      </Typography>

      <Typography variant="body1" color="textSecondary" component="span">
        Senior Software Developer bei FFG Finanzcheck Finanzportale GmbH
      </Typography>

      <div className={classes.portrait}>
        <div className={classes.planet + ' ' + classes.top}></div>
        <div className={classes.ring}></div>
        <div className={classes.planet + ' ' + classes.bottom}></div>
      </div>
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
