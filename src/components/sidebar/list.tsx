import { cn } from '@/lib/utils'
import { Home } from 'lucide-react'
import Link from 'next/link'

interface ItemProps extends React.ComponentProps<'li'> {
  icon: React.ReactNode
  path: string
}

const Item = ({ children, className, icon, path, ...rest }: ItemProps) => {
  return (
    <Link href={path}>
      <li
        className={cn(
          'flex items-center gap-2 rounded-md bg-primary/25 p-2 hover:bg-primary/50',
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
      <ul className="px-2 py-4">
        <Item path="/" icon={<Home className="h-5 w-5" />}>
          Início
        </Item>
      </ul>
    </nav>
  )
}
