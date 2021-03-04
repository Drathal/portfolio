import { FC } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'

import Typography from '@material-ui/core/Typography'

import { ProjectType } from '../projects/interface'

interface IProps {
  projects: ProjectType[]
}

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  media: {
    height: 300
  },
  chip: {
    float: 'right',
    margin: '1rem 0.5rem',
    padding: '.5rem'
  }
})

const ProjectList: FC<IProps> = ({ projects }) => {
  const classes = useStyles()
  if (!projects) return null

  return (
    <Timeline align="alternate">
      {projects &&
        projects.map((project) => {
          const projectLink = project.frontmatter.link
            ? project.frontmatter.link
            : `/project/${project.slug}`

          const projectTarget = project.frontmatter.link ? '_blank' : null

          return (
            <TimelineItem key={project.slug}>
              <TimelineOppositeContent>
                <Link
                  href={{
                    pathname: projectLink
                  }}
                >
                  <a target={projectTarget}>
                    <Typography variant="body2" color="textSecondary">
                      {project.frontmatter.year}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {project.frontmatter.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3">
                      {project.frontmatter.subtitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                    >
                      <ReactMarkdown source={project.markdownBody} />{' '}
                    </Typography>
                  </a>
                </Link>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Link
                  href={{
                    pathname: projectLink
                  }}
                >
                  <a target={projectTarget}>
                    <Card
                      className={classes.root}
                      raised={true}
                      variant="outlined"
                    >
                      <CardActionArea>
                        <Chip
                          className={classes.chip}
                          size="small"
                          label={project.frontmatter.year}
                          color="secondary"
                        />
                        <CardMedia
                          className={classes.media}
                          image={`/thumbs/${project.frontmatter.thumb}`}
                          title="Contemplative Reptile"
                        />
                      </CardActionArea>
                    </Card>
                    <br />
                    <br />
                    <br />
                  </a>
                </Link>
              </TimelineContent>
            </TimelineItem>
          )
        })}
    </Timeline>
  )
}

export default ProjectList
