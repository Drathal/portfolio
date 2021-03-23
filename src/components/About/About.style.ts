import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
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
