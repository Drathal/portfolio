import { FC } from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { FrontmatterProject } from '../../projects/interface'
import { slugsFromFilenames } from '../../utils'
import Layout from '../../components/Layout'

interface IProps {
  siteTitle: string
  frontmatter: FrontmatterProject
  markdownBody: string
}

const Project: FC<IProps> = ({ siteTitle, frontmatter, markdownBody }) => {
  if (!frontmatter) return null

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/">
        <a>Projects</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  )
}

interface GetStaticPropsParams {
  params: {
    projectname: string
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsParams) => {
  const { projectname } = params

  const content = await import(`../../projects/${projectname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content
    } as IProps
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = slugsFromFilenames(
    require.context('../../projects', true, /\.md$/)
  )

  const paths = slugs.map((slug: string) => `/project/${slug}`)

  return {
    paths,
    fallback: false
  }
}

export default Project
