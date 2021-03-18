import { FC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'

interface IProps {
  title: string
  description: string
}

const About: FC<IProps> = ({ title }) => {
  return (
    <Layout pageTitle={`${title} | About`}>
      <h1 className="title">About me</h1>

      <p>Well .. this is a TODO</p>
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    } as IProps
  }
}
