import { UserNav } from './userNav'

interface HeaderProps extends React.ComponentProps<'header'> {
  component?: React.ReactNode
}

export function Header({ children, component, ...rest }: HeaderProps) {
  return (
    <header
      className="flex justify-between items-center border-b px-4 w-full py-4 bg-background"
      {...rest}
    >
      <h3>{children}</h3>
      <div>
        {component}
        <UserNav />
      </div>
    </header>
  )
}
