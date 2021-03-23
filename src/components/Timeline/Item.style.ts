import { makeStyles } from '@material-ui/core'
import { pillsStyle } from '../../theme/pills.style'

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      '&:nth-child(even)': {
        flexDirection: 'column-reverse'
      }
    },
    [theme.breakpoints.up('md')]: {
      '&:nth-child(odd) .MuiTimelineItem-oppositeContent': {
        '& ul': {
          direction: 'rtl',
          padding: '1rem 1.25rem 1rem 0'
        }
      },
      '&:nth-child(even) .MuiTimelineItem-oppositeContent': {
        '& ul': {
          direction: 'ltr',
          padding: '1rem 0 1rem 1.25rem'
        }
      }
    }
  },
  separator: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  content: {
    minHeight: '300px',
    marginBottom: '4rem',

    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      padding: '0.5rem 0',
      textAlign: 'left'
    },
    '& ul': {
      color: theme.palette.text.hint
    },
    '& li': {
      fontSize: '0.98rem',
      listStyleType: 'disc',
      marginBottom: '0.5rem',
      lineHeight: '110%'
    }
  },
  contentCard: {
    margin: '1rem 0 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 0'
    }
  },
  year: {
    margin: '0.75rem 0 0.5rem 0'
  },
  cardMedia: {
    height: 300
  },
  pill: pillsStyle()
}))
