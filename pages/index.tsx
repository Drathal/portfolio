import { FC } from 'react'
import { GetStaticProps } from 'next'

import { projectListFromDirectory } from '../utils'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'
import { ProjectType } from '../projects/interface'

interface IProps {
  title: string
  description: string
  projects: ProjectType[]
}

const Index: FC<IProps> = ({ projects, title, description }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">{title}</h1>
      <p>{description}</p>
      <main>
        <ProjectList projects={projects} />
      </main>
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import(`../siteconfig.json`)
  const projects = projectListFromDirectory(
    require.context('../projects', true, /\.md$/)
  )

  return {
    props: {
      projects,
      title: configData.default.title,
      description: configData.default.description
    }
  }
}
