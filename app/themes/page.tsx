import { MainLayout } from '@/components/main-layout'
import { ThemeShowcase } from '@/components/theme-showcase'

export default function ThemesPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Theme Builder</h1>
          <p className="text-muted-foreground text-lg">
            Customize the appearance by adjusting theme colors and see how they affect all components in real-time.
          </p>
        </div>
        <ThemeShowcase />
      </div>
    </MainLayout>
  )
}