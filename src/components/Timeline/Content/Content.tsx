import { FC } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import Typography from '@material-ui/core/Typography'

import Link from '../../Link'
import { useStyles } from './Content.style'
import { replacePills } from '../../../theme/pills.style'

interface IProps {
  link?: string
  year: string
  title: string
  subtitle: string
  markdown: string
}

export const Content: FC<IProps> = ({
  link,
  year,
  title,
  subtitle,
  markdown
}) => {
  const classes = useStyles()
  const text = replacePills(markdown, classes.pill)

  return (
    <Link to={link}>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.year}
      >
        {year}
      </Typography>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography gutterBottom variant="h6" component="h3">
        {subtitle}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="span">
        <ReactMarkdown allowDangerousHtml source={text} />
      </Typography>
    </Link>
  )
}
