import Link from 'next/link'
import { Icons } from '../icons'
import { buttonVariants } from '../ui/button'

const socials = [
  {
    name: 'Github',
    href: 'https://github.com/barcaca/btecho',
    icon: Icons.gitHub,
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-950 font-sans">
      <div className="mx-auto mt-3 flex max-w-xl flex-col items-center justify-center gap-4 px-3 py-8 md:flex-row md:justify-between lg:max-w-7xl">
        <p className="text-muted-foreground text-xs">
          BTECHO.GG is not affiliated with ZeptoLab. All trademarks, logos, and
          names belong to their respective owners.
        </p>
        <div
          className="inline-flex items-center gap-8"
          aria-label="Social media links"
        >
          {socials.map(social => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
              aria-label={`Visit our ${social.name} profile`}
            >
              <social.icon className="size-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
