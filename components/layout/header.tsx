'use client'
import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Heroes', href: '/heroes' },
  { name: 'Gears', href: '/gears' },
  { name: 'Modes', href: '/modes' },
]

const Header = () => {
  return (
    <header className="h-auto bg-violet-900">
      <div className="mx-auto max-w-xl px-3 lg:max-w-7xl ">
        <Nav>
          <NavItem />
        </Nav>
      </div>
    </header>
  )
}

const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav aria-label="Navigation" className="flex h-12 items-center gap-4">
      <Link href="/" aria-label="Home">
        <Image src={logo} alt="Logo" width={76} height={46} />
      </Link>
      <ul className="flex h-full w-full items-center gap-1">{children}</ul>
    </nav>
  )
}

const NavItem = () => {
  const pathname = usePathname()
  return navItems.map(item => {
    const isActive = pathname === item.href
    return (
      <li
        key={item.href}
        className="relative flex h-full items-center font-sans text-white ease-out after:absolute after:bottom-0 after:block after:h-1 after:w-full after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-700 hover:after:scale-x-100"
        data-active={isActive}
      >
        <Link
          href={item.href}
          className="relative flex items-center px-3 py-2 focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-yellow-500"
        >
          {item.name}
        </Link>
      </li>
    )
  })
}

export default Header
