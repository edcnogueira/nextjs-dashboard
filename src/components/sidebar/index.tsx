import { Header } from './header'
import { List } from './list'

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col border-r h-screen w-60">
      <Header />
      <List />
    </aside>
  )
}
