import { cn } from '@/lib/utils'

interface ContainerProps extends React.ComponentProps<'div'> {}

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn(
        'm-2 scroll-auto rounded-md bg-background p-2 md:p-4',
        className,
      )}
      {...rest}
    />
  )
}
