import Link from 'next/link'

export default function ProjectList({ projects }) {
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
