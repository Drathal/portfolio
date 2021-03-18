import matter from 'gray-matter'
import { ProjectType } from '../types'

export const slugsFromFilenames = (
  ctx: __WebpackModuleApi.RequireContext
): string[] => ctx.keys().map((key) => key.replace(/^.*[\\/]/, '').slice(0, -3))

interface ProjectContext {
  default: string
}

const sortProjectByYear = (a: ProjectType, b: ProjectType) =>
  a.frontmatter.year < b.frontmatter.year ? 1 : -1

export const projectListFromDirectory = (
  ctx: __WebpackModuleApi.RequireContext
): ProjectType[] => {
  const keys = ctx.keys()
  const values = keys.map(ctx) as ProjectContext[]

  const data = keys.map((key, index) => {
    const slug = key.replace(/^.*[\\/]/, '').slice(0, -3)
    const value = values[index]
    const document = matter(value.default)

    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug
    } as ProjectType
  })

  data.sort(sortProjectByYear)

  return data
}
