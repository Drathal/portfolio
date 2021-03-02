const slugsFromFilenames = (ctx) =>
  ctx.keys().map((key) => key.replace(/^.*[\\/]/, '').slice(0, -3))

export const projectSlugs = slugsFromFilenames(
  require.context('../../projects', true, /\.md$/)
)
