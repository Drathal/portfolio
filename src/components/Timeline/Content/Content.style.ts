import { makeStyles } from '@material-ui/core'
import { pillsStyle } from '../../../theme/pills.style'

export const useStyles = makeStyles(() => ({
  year: {
    margin: '0.75rem 0 0.5rem 0'
  },
  pill: pillsStyle()
}))
