import { Header } from './header'
import { List } from './list'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import React from 'react'

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-60 flex-col border-r md:flex">
      <Header />
      <List />
    </aside>
  )
}

export function SidebarMobile() {
  return (
    <aside>
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex h-screen w-60 flex-col border-r"
        >
          <Header />
          <List />
        </SheetContent>
      </Sheet>
    </aside>
  )
}
