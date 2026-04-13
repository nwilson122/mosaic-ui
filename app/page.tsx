import { MainLayout } from '@/components/main-layout'
import { ComponentGallery } from '@/components/component-gallery'

export default function HomePage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Components</h1>
          <p className="text-muted-foreground text-lg">
            Interactive showcase of all design system components with live previews and code examples.
          </p>
        </div>
        <ComponentGallery />
      </div>
    </MainLayout>
  )
}