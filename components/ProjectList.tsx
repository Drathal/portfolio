import { FC } from 'react'
import Link from 'next/link'

import { ProjectType } from '../projects/interface'

interface IProps {
  projects: ProjectType[]
}

const ProjectList: FC<IProps> = ({ projects }) => {
  if (!projects) return null

  return (
    <div>
      <ul>
        {projects &&
          projects.map((project) => {
            return (
              <li key={project.slug}>
                <Link href={{ pathname: `/project/${project.slug}` }}>
                  <a>{project.frontmatter.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default ProjectList
