import { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, GridProps } from '@material-ui/core'

const useStyles = makeStyles({
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px'
  }
})

interface IProps extends GridProps {
  className?: string
}

const GridItem: FC<IProps> = ({ children, className, ...rest }) => {
  const classes = useStyles()
  return (
    <Grid item {...rest} className={clsx(classes.grid, className)}>
      {children}
    </Grid>
  )
}

export default GridItem
