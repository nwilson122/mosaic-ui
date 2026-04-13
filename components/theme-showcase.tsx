'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Separator } from './ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const presetThemes = [
  {
    name: 'Default Dark',
    primary: 'hsl(0 0% 98%)',
    secondary: 'hsl(240 3.7% 15.9%)',
    accent: 'hsl(240 3.7% 15.9%)',
    background: 'hsl(240 10% 3.9%)',
    foreground: 'hsl(0 0% 98%)',
  },
  {
    name: 'Blue Theme',
    primary: 'hsl(210 100% 50%)',
    secondary: 'hsl(210 15% 25%)',
    accent: 'hsl(210 40% 20%)',
    background: 'hsl(222 47% 4%)',
    foreground: 'hsl(210 40% 98%)',
  },
  {
    name: 'Green Theme',
    primary: 'hsl(142 76% 36%)',
    secondary: 'hsl(142 15% 25%)',
    accent: 'hsl(142 25% 20%)',
    background: 'hsl(140 50% 3%)',
    foreground: 'hsl(142 40% 98%)',
  },
  {
    name: 'Purple Theme',
    primary: 'hsl(262 83% 58%)',
    secondary: 'hsl(262 15% 25%)',
    accent: 'hsl(262 25% 20%)',
    background: 'hsl(260 50% 3%)',
    foreground: 'hsl(262 40% 98%)',
  },
  {
    name: 'Orange Theme',
    primary: 'hsl(25 95% 53%)',
    secondary: 'hsl(25 15% 25%)',
    accent: 'hsl(25 25% 20%)',
    background: 'hsl(20 50% 3%)',
    foreground: 'hsl(25 40% 98%)',
  },
]

interface Theme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
}

export function ThemeShowcase() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(presetThemes[0])
  const [customTheme, setCustomTheme] = useState<Theme>({
    name: 'Custom',
    primary: 'hsl(0 0% 98%)',
    secondary: 'hsl(240 3.7% 15.9%)',
    accent: 'hsl(240 3.7% 15.9%)',
    background: 'hsl(240 10% 3.9%)',
    foreground: 'hsl(0 0% 98%)',
  })

  const applyTheme = (theme: Theme) => {
    setCurrentTheme(theme)
    const root = document.documentElement
    // Parse HSL values and update CSS custom properties
    root.style.setProperty('--primary', theme.primary.replace('hsl(', '').replace(')', ''))
    root.style.setProperty('--secondary', theme.secondary.replace('hsl(', '').replace(')', ''))
    root.style.setProperty('--accent', theme.accent.replace('hsl(', '').replace(')', ''))
    root.style.setProperty('--background', theme.background.replace('hsl(', '').replace(')', ''))
    root.style.setProperty('--foreground', theme.foreground.replace('hsl(', '').replace(')', ''))
  }

  const updateCustomTheme = (key: keyof Theme, value: string) => {
    const updated = { ...customTheme, [key]: value }
    setCustomTheme(updated)
    if (currentTheme.name === 'Custom') {
      applyTheme(updated)
    }
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="presets">
        <TabsList>
          <TabsTrigger value="presets">Preset Themes</TabsTrigger>
          <TabsTrigger value="custom">Custom Theme</TabsTrigger>
        </TabsList>

        <TabsContent value="presets" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {presetThemes.map((theme) => (
              <Card
                key={theme.name}
                className={`cursor-pointer transition-colors ${
                  currentTheme.name === theme.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => applyTheme(theme)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{theme.name}</CardTitle>
                  <CardDescription>Click to apply theme</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <div
                      className="w-8 h-8 rounded border"
                      style={{ backgroundColor: theme.primary }}
                      title="Primary"
                    />
                    <div
                      className="w-8 h-8 rounded border"
                      style={{ backgroundColor: theme.secondary }}
                      title="Secondary"
                    />
                    <div
                      className="w-8 h-8 rounded border"
                      style={{ backgroundColor: theme.accent }}
                      title="Accent"
                    />
                    <div
                      className="w-8 h-8 rounded border"
                      style={{ backgroundColor: theme.background }}
                      title="Background"
                    />
                    <div
                      className="w-8 h-8 rounded border"
                      style={{ backgroundColor: theme.foreground }}
                      title="Foreground"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Custom Theme Builder</CardTitle>
              <CardDescription>
                Adjust the colors below to create your own theme. Changes are applied in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary">Primary Color</Label>
                    <Input
                      id="primary"
                      value={customTheme.primary}
                      onChange={(e) => updateCustomTheme('primary', e.target.value)}
                      placeholder="hsl(0 0% 98%)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary">Secondary Color</Label>
                    <Input
                      id="secondary"
                      value={customTheme.secondary}
                      onChange={(e) => updateCustomTheme('secondary', e.target.value)}
                      placeholder="hsl(240 3.7% 15.9%)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accent">Accent Color</Label>
                    <Input
                      id="accent"
                      value={customTheme.accent}
                      onChange={(e) => updateCustomTheme('accent', e.target.value)}
                      placeholder="hsl(240 3.7% 15.9%)"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="background">Background Color</Label>
                    <Input
                      id="background"
                      value={customTheme.background}
                      onChange={(e) => updateCustomTheme('background', e.target.value)}
                      placeholder="hsl(240 10% 3.9%)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="foreground">Foreground Color</Label>
                    <Input
                      id="foreground"
                      value={customTheme.foreground}
                      onChange={(e) => updateCustomTheme('foreground', e.target.value)}
                      placeholder="hsl(0 0% 98%)"
                    />
                  </div>
                </div>
              </div>
              <Button onClick={() => applyTheme(customTheme)} className="w-full">
                Apply Custom Theme
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator />

      {/* Theme Preview */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Theme Preview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>See how your theme affects components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default Badge</Badge>
                <Badge variant="secondary">Secondary Badge</Badge>
                <Badge variant="outline">Outline Badge</Badge>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preview-input">Sample Input</Label>
                <Input id="preview-input" placeholder="Type something..." />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Theme: {currentTheme.name}</CardTitle>
              <CardDescription>Active color values</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Primary</span>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded border"
                      style={{ backgroundColor: currentTheme.primary }}
                    />
                    <code className="text-xs text-muted-foreground">{currentTheme.primary}</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Secondary</span>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded border"
                      style={{ backgroundColor: currentTheme.secondary }}
                    />
                    <code className="text-xs text-muted-foreground">{currentTheme.secondary}</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accent</span>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded border"
                      style={{ backgroundColor: currentTheme.accent }}
                    />
                    <code className="text-xs text-muted-foreground">{currentTheme.accent}</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Background</span>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded border"
                      style={{ backgroundColor: currentTheme.background }}
                    />
                    <code className="text-xs text-muted-foreground">{currentTheme.background}</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Foreground</span>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded border"
                      style={{ backgroundColor: currentTheme.foreground }}
                    />
                    <code className="text-xs text-muted-foreground">{currentTheme.foreground}</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}