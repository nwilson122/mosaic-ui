'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Palette,
  Component,
  Brush,
  Icons,
  Home,
  Github
} from 'lucide-react'

interface MainLayoutProps {
  children: React.ReactNode
}

const navigation = [
  {
    name: 'Components',
    href: '/',
    icon: Component,
  },
  {
    name: 'Tokens',
    href: '/tokens',
    icon: Palette,
  },
  {
    name: 'Themes',
    href: '/themes',
    icon: Brush,
  },
  {
    name: 'Icons',
    href: '/icons',
    icon: Icons,
  },
]

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-card">
        <div className="flex h-16 items-center border-b border-border px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <Home className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Mosaic</h1>
              <p className="text-xs text-muted-foreground">Design System</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 pt-8 border-t border-border">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}