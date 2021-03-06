import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'

import { slugsFromFilenames, ProjectMeta } from '../../utils'
import Layout from '../../components/Layout'
import { replacePills, pillsStyle } from '../../theme/pills.style'

interface IProps {
  siteTitle: string
  meta: ProjectMeta
  markdown: string
}

const useStyles = makeStyles(() => ({
  pill: pillsStyle()
}))

const Project: FC<IProps> = ({ siteTitle, meta, markdown }) => {
  const classes = useStyles()
  if (!meta) return null

  const text = replacePills(markdown, classes.pill)

  return (
    <Layout pageTitle={`${siteTitle} | ${meta.title}`}>
      <article>
        <Typography variant="h5" component="h2">
          {meta.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="span">
          <ReactMarkdown allowDangerousHtml source={text} />
        </Typography>
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
  const config = await import(`../../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      meta: data.data,
      markdown: data.content
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
