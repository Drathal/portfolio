import { FC } from 'react'
import { GetServerSideProps } from 'next'

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const full = query.code === process.env.PASSWORD
  const projects = await getProjectData({ full })
  const configData = await import(`../../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      projects: projects
    }
  }
}
