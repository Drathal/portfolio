import { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, GridProps } from '@material-ui/core'

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
}

const useStyles = makeStyles(styles)

interface IProps extends GridProps {
  className?: string
}

const GridContainer: FC<IProps> = ({ children, className, ...rest }) => {
  const classes = useStyles()
  return (
    <Grid container {...rest} className={clsx(classes.grid, className)}>
      {children}
    </Grid>
  )
}

export default GridContainer
