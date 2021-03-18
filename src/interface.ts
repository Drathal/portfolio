export interface FrontmatterProject {
  link?: string
  thumb: string
  year: string
  subtitle: string
  title: string
}

export interface ProjectType {
  frontmatter: FrontmatterProject
  markdownBody: string
  slug: string
}
