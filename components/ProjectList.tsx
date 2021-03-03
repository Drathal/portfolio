import { FC } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
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
    <div>
      <ul>
        {projects &&
          projects.map((project) => {
            const projectlink = project.frontmatter.link
              ? project.frontmatter.link
              : `/project/${project.slug}`

            const projecttarget = project.frontmatter.link ? '_blank' : null

            return (
              <li key={project.slug}>
                <Link
                  href={{
                    pathname: projectlink
                  }}
                >
                  <a target={projecttarget}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <Chip
                          className={classes.chip}
                          size="small"
                          label={project.frontmatter.year}
                          color="primary"
                        />
                        <CardMedia
                          className={classes.media}
                          image={`/thumbs/${project.frontmatter.thumb}`}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
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
                            <ReactMarkdown source={project.markdownBody} />
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default ProjectList
