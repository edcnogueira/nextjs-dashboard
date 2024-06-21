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
          'flex items-center gap-2 bg-primary/25 hover:bg-primary/50 rounded-md p-2',
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
    <ul className="px-2 py-4">
      <Item path="/" icon={<Home className="h-5 w-5" />}>
        Início
      </Item>
    </ul>
  )
}
