import { FC } from 'react'
import Timeline from '@material-ui/lab/Timeline'
import { makeStyles } from '@material-ui/core/styles'

import { ProjectType } from '../types'
import { Item } from './Timeline'

interface IProps {
  projects: ProjectType[]
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '0'
  }
}))

const ProjectList: FC<IProps> = ({ projects }) => {
  const classes = useStyles()
  if (!projects) return null

  return (
    <Timeline align="alternate" className={classes.root}>
      {projects &&
        projects.map((project) => {
          return (
            <Item
              key={project.slug}
              {...{
                slug: project.slug,
                year: project.frontmatter.year,
                link: project.frontmatter.link,
                title: project.frontmatter.title,
                subtitle: project.frontmatter.subtitle,
                markdownBody: project.markdownBody,
                thumb: project.frontmatter.thumb
              }}
            />
          )
        })}
    </Timeline>
  )
}

export default ProjectList
