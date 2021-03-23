import matter from 'gray-matter'

import nameFromPath from './nameFromPath'
import { ProjectType } from '../types'

export const slugsFromFilenames = (
  ctx: __WebpackModuleApi.RequireContext
): string[] => ctx.keys().map((key) => nameFromPath(key))

interface ProjectContext {
  default: string
}

const sortProjectByYear = (a: ProjectType, b: ProjectType) =>
  a.frontmatter.year < b.frontmatter.year ? 1 : -1

export const projectListFromDirectory = (
  ctx: __WebpackModuleApi.RequireContext
): ProjectType[] => {
  console.log(ctx)

  const keys = ctx.keys()
  const values = keys.map(ctx) as ProjectContext[]

  const data = keys.map((key, index) => {
    const slug = nameFromPath(key)
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
