import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { slugsFromFilenames } from '../../utils'
import Layout from '../../components/Layout'

export default function Project({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/">
        <a>Projects</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>By: {frontmatter.author}</p>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { projectname } = ctx.params

  const content = await import(`../../projects/${projectname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content
    }
  }
}

export async function getStaticPaths() {
  const slugs = slugsFromFilenames(
    require.context('../../projects', true, /\.md$/)
  )
  const paths = slugs.map((slug) => `/project/${slug}`)

  return {
    paths,
    fallback: false
  }
}
