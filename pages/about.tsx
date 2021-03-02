import { FC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'

interface IProps {
  title: string
  description: string
}

const About: FC<IProps> = ({ title, description }) => {
  return (
    <Layout pageTitle={`${title} | About`}>
      <h1 className="title">Welcome to portfolio!</h1>
      <p className="description">{description}</p>

      <p>
        I am a very exciting person. I know this because I&apos;m following a
        very exciting tutorial, and a not-exciting person wouldn&apos;t do that.
      </p>
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
