export const slugsFromFilenames = (ctx) =>
  ctx.keys().map((key) => key.replace(/^.*[\\/]/, '').slice(0, -3))
