import { MainLayout } from '@/components/main-layout'
import { IconsShowcase } from '@/components/icons-showcase'

export default function IconsPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Icon Library</h1>
          <p className="text-muted-foreground text-lg">
            Complete collection of Lucide icons used throughout the design system. Search, preview, and copy icon code.
          </p>
        </div>
        <IconsShowcase />
      </div>
    </MainLayout>
  )
}