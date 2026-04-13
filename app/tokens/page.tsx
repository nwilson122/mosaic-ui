import { MainLayout } from '@/components/main-layout'
import { TokensShowcase } from '@/components/tokens-showcase'

export default function TokensPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Design Tokens</h1>
          <p className="text-muted-foreground text-lg">
            Color palette, typography scale, spacing system, and other design primitives that form the foundation of the design system.
          </p>
        </div>
        <TokensShowcase />
      </div>
    </MainLayout>
  )
}