import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => (
  <header className="header">
    <nav className="nav">
      <Link href="/">
        <a>Projects</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </header>
)

export default Header
