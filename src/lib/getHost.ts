export const getHost = (): string =>
  location.protocol +
  '//' +
  location.hostname +
  (location.port ? ':' + location.port : '')
