import { FC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import About from '../components/About/About'

interface IProps {
  title: string
  description: string
}

const PageAbout: FC<IProps> = ({ title, description }) => {
  return (
    <Layout pageTitle={`${title} | About`}>
      <About title={title} description={description} />
    </Layout>
  )
}

export default PageAbout

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import(`../../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    } as IProps
  }
}
