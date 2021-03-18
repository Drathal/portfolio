import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const starSize = 2000
const rnd = (size: number) => Math.floor(Math.random() * Math.floor(size))

const stars = (size: number, blurRadius = 0): string[] =>
  Array.from(Array(size)).map(
    () =>
      `${rnd(starSize)}px ${rnd(starSize)}px ${blurRadius}px #fff` +
      ', ' +
      `${rnd(starSize) + starSize}px ${rnd(starSize)}px ${blurRadius}px #fff`
  )

const useStyles = makeStyles({
  bg: {
    background: 'radial-gradient(center, #15304d 0%, #090A0F 100%)',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    zIndex: -1
  },
  star1: {
    width: '1px',
    height: '1px',
    background: 'transparent',
    animation: '$works 70s linear infinite',
    boxShadow: `${stars(600, 0).join(',')}`
  },
  star2: {
    width: '2px',
    height: '2px',
    background: 'transparent',
    animation: '$works 50s linear infinite',
    boxShadow: `${stars(200, 2).join(',')}`
  },
  star3: {
    width: '3px',
    height: '3px',
    background: 'transparent',
    animation: '$works 30s linear infinite',
    boxShadow: `${stars(50, 2).join(',')}`
  },
  [`@keyframes works`]: {
    from: { transform: 'translateX(0px)' },
    to: { transform: 'translateX(-2000px)' }
  }
})

const Starfield: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.bg}>
      <div className={classes.star1} />
      <div className={classes.star2} />
      <div className={classes.star3} />
    </div>
  )
}

export default Starfield
