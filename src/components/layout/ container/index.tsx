import { cn } from '@/lib/utils'

interface ContainerProps extends React.ComponentProps<'div'> {}

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn(
        'p-2 md:p-4 bg-background m-2 rounded-md scroll-auto',
        className,
      )}
      {...rest}
    />
  )
}
