import { FC } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'
import Typography from '@material-ui/core/Typography'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

interface IProps {
  slug: string
  link?: string
  year: string
  title: string
  subtitle: string
  markdownBody: string
  thumb: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      '&:nth-child(even)': {
        flexDirection: 'column-reverse'
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
    }
  },
  contentCard: {
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 0'
    }
  },
  year: {
    margin: '0 0 0.5rem 0'
  },
  cardMedia: {
    height: 300
  }
}))

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
  const thumbnail = `/thumbs/${thumb}`
  const projectLink = link ? link : `/project/${slug}`
  const projectTarget = link ? '_blank' : null

  return (
    <TimelineItem className={classes.root}>
      <TimelineOppositeContent className={classes.content}>
        <Link
          href={{
            pathname: projectLink
          }}
        >
          <a target={projectTarget}>
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
              <ReactMarkdown source={markdownBody} />{' '}
            </Typography>
          </a>
        </Link>
      </TimelineOppositeContent>
      <TimelineSeparator className={classes.separator}>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.contentCard}>
        {thumb && (
          <Link
            href={{
              pathname: projectLink
            }}
          >
            <a target={projectTarget}>
              <Card raised={true} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={thumbnail}
                    title={`${title} - ${subtitle}`}
                  />
                </CardActionArea>
              </Card>
            </a>
          </Link>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}