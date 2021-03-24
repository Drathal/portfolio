import { FC } from 'react'
import { GetStaticProps } from 'next'

import { getProjectData, ProjectType } from '../utils'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'

interface IProps {
  title: string
  description: string
  projects: ProjectType[]
}

const Index: FC<IProps> = ({ projects, title }) => {
  return (
    <Layout pageTitle={title}>
      <ProjectList projects={projects} />
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjectData()
  const configData = await import(`../../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      projects: projects
    }
  }
}
