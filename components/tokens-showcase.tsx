import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const colorTokens = [
  { name: 'Background', value: 'hsl(240 10% 3.9%)', var: '--background', class: 'bg-background' },
  { name: 'Foreground', value: 'hsl(0 0% 98%)', var: '--foreground', class: 'bg-foreground' },
  { name: 'Primary', value: 'hsl(0 0% 98%)', var: '--primary', class: 'bg-primary' },
  { name: 'Primary Foreground', value: 'hsl(240 5.9% 10%)', var: '--primary-foreground', class: 'bg-primary-foreground' },
  { name: 'Secondary', value: 'hsl(240 3.7% 15.9%)', var: '--secondary', class: 'bg-secondary' },
  { name: 'Secondary Foreground', value: 'hsl(0 0% 98%)', var: '--secondary-foreground', class: 'bg-secondary-foreground' },
  { name: 'Muted', value: 'hsl(240 3.7% 15.9%)', var: '--muted', class: 'bg-muted' },
  { name: 'Muted Foreground', value: 'hsl(240 5% 64.9%)', var: '--muted-foreground', class: 'bg-muted-foreground' },
  { name: 'Accent', value: 'hsl(240 3.7% 15.9%)', var: '--accent', class: 'bg-accent' },
  { name: 'Accent Foreground', value: 'hsl(0 0% 98%)', var: '--accent-foreground', class: 'bg-accent-foreground' },
  { name: 'Destructive', value: 'hsl(0 62.8% 30.6%)', var: '--destructive', class: 'bg-destructive' },
  { name: 'Destructive Foreground', value: 'hsl(0 0% 98%)', var: '--destructive-foreground', class: 'bg-destructive-foreground' },
  { name: 'Border', value: 'hsl(240 3.7% 15.9%)', var: '--border', class: 'bg-border' },
  { name: 'Input', value: 'hsl(240 3.7% 15.9%)', var: '--input', class: 'bg-input' },
  { name: 'Ring', value: 'hsl(240 4.9% 83.9%)', var: '--ring', class: 'bg-ring' },
]

const typographyScale = [
  { name: 'xs', class: 'text-xs', size: '12px', lineHeight: '16px' },
  { name: 'sm', class: 'text-sm', size: '14px', lineHeight: '20px' },
  { name: 'base', class: 'text-base', size: '16px', lineHeight: '24px' },
  { name: 'lg', class: 'text-lg', size: '18px', lineHeight: '28px' },
  { name: 'xl', class: 'text-xl', size: '20px', lineHeight: '28px' },
  { name: '2xl', class: 'text-2xl', size: '24px', lineHeight: '32px' },
  { name: '3xl', class: 'text-3xl', size: '30px', lineHeight: '36px' },
  { name: '4xl', class: 'text-4xl', size: '36px', lineHeight: '40px' },
  { name: '5xl', class: 'text-5xl', size: '48px', lineHeight: '1' },
  { name: '6xl', class: 'text-6xl', size: '60px', lineHeight: '1' },
]

const spacingScale = [
  { name: '0', class: 'p-0', value: '0px' },
  { name: '1', class: 'p-1', value: '4px' },
  { name: '2', class: 'p-2', value: '8px' },
  { name: '3', class: 'p-3', value: '12px' },
  { name: '4', class: 'p-4', value: '16px' },
  { name: '6', class: 'p-6', value: '24px' },
  { name: '8', class: 'p-8', value: '32px' },
  { name: '12', class: 'p-12', value: '48px' },
  { name: '16', class: 'p-16', value: '64px' },
  { name: '20', class: 'p-20', value: '80px' },
]

const radiusScale = [
  { name: 'none', class: 'rounded-none', value: '0px' },
  { name: 'sm', class: 'rounded-sm', value: '2px' },
  { name: 'base', class: 'rounded', value: '4px' },
  { name: 'md', class: 'rounded-md', value: '6px' },
  { name: 'lg', class: 'rounded-lg', value: '8px' },
  { name: 'xl', class: 'rounded-xl', value: '12px' },
  { name: '2xl', class: 'rounded-2xl', value: '16px' },
  { name: 'full', class: 'rounded-full', value: '9999px' },
]

function ColorToken({ name, value, var: varName, class: className }: { name: string; value: string; var: string; class: string }) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg border">
      <div className={`w-10 h-10 rounded border ${className}`} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{varName}</p>
        <p className="text-xs text-muted-foreground font-mono">{value}</p>
      </div>
    </div>
  )
}

export function TokensShowcase() {
  return (
    <div className="space-y-12">
      {/* Colors */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Color Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorTokens.map((token) => (
            <ColorToken key={token.name} {...token} />
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Typography Scale</h2>
        <Card>
          <CardHeader>
            <CardTitle>Font Sizes</CardTitle>
            <CardDescription>Consistent typography scale for all text elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {typographyScale.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between border-b pb-2">
                <div className="flex items-baseline space-x-4">
                  <Badge variant="outline" className="font-mono text-xs">
                    {item.name}
                  </Badge>
                  <span className={item.class}>The quick brown fox jumps over the lazy dog</span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {item.size} / {item.lineHeight}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Spacing */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Spacing Scale</h2>
        <Card>
          <CardHeader>
            <CardTitle>Spacing Units</CardTitle>
            <CardDescription>Consistent spacing system for layouts and components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {spacingScale.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="mb-2">
                    <div className="bg-primary inline-block" style={{ width: item.value, height: item.value }} />
                  </div>
                  <div className="text-xs">
                    <Badge variant="outline" className="font-mono">
                      {item.name}
                    </Badge>
                    <p className="text-muted-foreground mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Border Radius */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Border Radius</h2>
        <Card>
          <CardHeader>
            <CardTitle>Corner Radius Scale</CardTitle>
            <CardDescription>Consistent border radius values for rounded corners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {radiusScale.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="mb-2">
                    <div className={`bg-primary w-16 h-16 mx-auto ${item.class}`} />
                  </div>
                  <div className="text-xs">
                    <Badge variant="outline" className="font-mono">
                      {item.name}
                    </Badge>
                    <p className="text-muted-foreground mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}