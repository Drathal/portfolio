import { FC } from 'react'
import Link from 'next/link'

interface IProps {
  to?: string | null
}

/**
 *  Returns childcomponents wrapped in a link element if link is passed
 *
 * @param link
 * @returns link wrapped components
 */
const WrappedLink: FC<IProps> = ({ to, children }) => {
  const href = {
    pathname: to
  }

  if (!to) return <>{children}</>

  return (
    <Link href={href}>
      <a target={'_blank'}>{children}</a>
    </Link>
  )
}

export default WrappedLink
