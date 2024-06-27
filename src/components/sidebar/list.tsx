'use client'

import { cn } from '@/lib/utils'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ItemProps extends React.ComponentProps<'li'> {
  icon: React.ReactNode
  path: string
}

const Item = ({ children, className, icon, path, ...rest }: ItemProps) => {
  const actualPath = usePathname()
  return (
    <Link href={path}>
      <li
        className={cn(
          'flex items-center gap-2 rounded-md p-1.5 hover:ring-[1px] hover:ring-ring',
          {
            'bg-accent': path === actualPath,
          },
          className,
        )}
        {...rest}
      >
        {' '}
        {icon} {children}
      </li>
    </Link>
  )
}

export function List() {
  return (
    <nav>
      <ul className="flex flex-col gap-2 px-2 py-4">
        <Item path="/" icon={<Home className="h-5 w-5" />}>
          Home
        </Item>
      </ul>
    </nav>
  )
}
