import { FC } from 'react'
import Timeline from '@material-ui/lab/Timeline'
import { makeStyles } from '@material-ui/core/styles'

import { ProjectType } from '../utils'
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
      {projects.map((project) => {
        return (
          <Item
            key={project.meta.slug}
            {...{
              slug: project.meta.slug,
              year: project.meta.year,
              link: project.markdown ? project.meta.link : null,
              title: project.meta.title,
              subtitle: project.meta.subtitle,
              markdownBody: project.markdown,
              thumb: project.meta.thumb
            }}
          />
        )
      })}
    </Timeline>
  )
}

export default ProjectList
