import matter from 'gray-matter'
import { pipe } from 'fp-ts/lib/function'

import nameFromPath from './nameFromPath'

export interface ProjectMeta {
  link?: string
  thumb: string
  year: string
  subtitle: string
  title: string
  slug: string
}
export interface ProjectType {
  meta: ProjectMeta
  markdown: string
  key: string
}

export const slugsFromFilenames = (
  ctx: __WebpackModuleApi.RequireContext
): string[] => ctx.keys().map((key) => nameFromPath(key))

const getValues = (ctx: __WebpackModuleApi.RequireContext) =>
  ctx.keys().map((name) => ({ markdown: ctx(name).default, key: name }))

const addSlug = (projects: ProjectType[]) =>
  projects.map((data) => ({ ...data, meta: { slug: nameFromPath(data.key) } }))

const sortProjectByYear = (a: ProjectType, b: ProjectType) =>
  a.meta.year < b.meta.year ? 1 : -1

const addFrontmatter = (projects: ProjectType[]) =>
  projects.map((data) => {
    const frontmatter = matter(data.markdown)
    return {
      ...data,
      markdown: frontmatter.content,
      meta: { ...data.meta, ...frontmatter.data }
    }
  })

const sortProjects = (projects: ProjectType[]) =>
  projects.sort(sortProjectByYear)

const filterProjectData = (fullData: boolean) => (projects: ProjectType[]) =>
  projects.map((data) => ({
    ...data,
    markdown: fullData || data.meta.thumb ? data.markdown : ''
  }))

interface GetProjectData {
  full?: boolean
}

export const getProjectData = async ({
  full
}: GetProjectData): Promise<ProjectType[]> => {
  const ctx = require.context('../projects', true, /\.md$/)

  const projects = pipe(
    ctx,
    getValues,
    addSlug,
    addFrontmatter,
    sortProjects,
    filterProjectData(full)
  )

  return projects
}
