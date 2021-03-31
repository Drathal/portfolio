import { FC } from 'react'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Album from '@material-ui/icons/Album'

import { config } from '../../config'
import { useStyles } from './Item.style'
import { Thumbnail } from './Thumbnail/Thumbnail'
import { Content } from './Content/Content'

interface IProps {
  slug: string
  link?: string | null
  year: string
  title: string
  subtitle: string
  markdownBody: string
  thumb: string
}

export const Item: FC<IProps> = ({
  slug,
  link,
  year,
  title,
  subtitle,
  markdownBody,
  thumb
}) => {
  const classes = useStyles()
  const thumbnail = thumb && `${config.path.thumbnail}${thumb}`
  const projectLink = link
    ? link
    : link === null
    ? null
    : `${config.path.project}${slug}`

  return (
    <TimelineItem className={classes.root}>
      <TimelineOppositeContent className={classes.content}>
        <Content
          link={projectLink}
          year={year}
          title={title}
          subtitle={subtitle}
          markdown={markdownBody}
        />
      </TimelineOppositeContent>
      <TimelineSeparator className={classes.separator}>
        <TimelineDot color="primary">
          <Album />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.contentCard}>
        <Thumbnail
          link={projectLink}
          title={`${title} - ${subtitle}`}
          thumbnail={thumbnail}
        />
      </TimelineContent>
    </TimelineItem>
  )
}
