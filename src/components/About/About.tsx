import { FC } from 'react'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './About.style'

interface IProps {
  title: string
  description: string
}

const About: FC<IProps> = ({ title, description }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h3" component="h2" className={classes.title}>
        {title}
      </Typography>

      <Typography variant="body1" color="textSecondary" component="span">
        {description}
      </Typography>
    </>
  )
}

/*

      <div className={classes.portrait}>
        <div className={classes.planet + ' ' + classes.top}></div>
        <div className={classes.ring}></div>
        <div className={classes.planet + ' ' + classes.bottom}></div>
      </div>

*/

export default About
