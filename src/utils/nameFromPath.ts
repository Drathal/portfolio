export const nameFromPath = (filepath: string): string =>
  filepath.replace(/^.*[\\/]/, '').replace(/\.[^.]*$/, '')

export default nameFromPath
