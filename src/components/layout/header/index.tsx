'use client'

import React from 'react'

import { MenuIcon } from 'lucide-react'
import { UserNav } from './userNav'
import { SidebarMobile } from '@/components/sidebar'

interface HeaderProps extends React.ComponentProps<'header'> {
  component?: React.ReactNode
}

export function Header({ children, component, ...rest }: HeaderProps) {
  return (
    <header
      className="flex w-full items-center justify-between border-b bg-background px-4 py-4"
      {...rest}
    >
      <div className="flex items-center gap-2">
        <SidebarMobile />
        <h3>{children}</h3>
      </div>
      <div>
        {component}
        <UserNav />
      </div>
    </header>
  )
}
