import { FC } from 'react'
import Timeline from '@material-ui/lab/Timeline'
import { makeStyles } from '@material-ui/core/styles'

import { ProjectType } from '../utils'
import { Item } from './Timeline'

interface IProps {
  projects: ProjectType[]
  showDetails: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '0'
  }
}))

const ProjectList: FC<IProps> = ({ projects, showDetails }) => {
  const classes = useStyles()

  if (!projects) return null

  return (
    <Timeline align="alternate" className={classes.root}>
      {projects.map((project) => {
        const hideJobDetails = !showDetails && !project.meta.link
        const markdownBody = hideJobDetails ? '' : project.markdown
        const link = hideJobDetails ? null : project.meta.link

        return (
          <Item
            key={project.meta.slug}
            {...{
              slug: project.meta.slug,
              year: project.meta.year,
              link,
              title: project.meta.title,
              subtitle: project.meta.subtitle,
              markdownBody,
              thumb: project.meta.thumb
            }}
          />
        )
      })}
    </Timeline>
  )
}

export default ProjectList
