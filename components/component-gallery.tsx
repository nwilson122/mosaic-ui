'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Switch } from './ui/switch'
import { Checkbox } from './ui/checkbox'
import { CodeBlock } from './code-block'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Progress } from './ui/progress'
import { Slider } from './ui/slider'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface ComponentShowcaseProps {
  title: string
  description: string
  preview: React.ReactNode
  code: string
}

function ComponentShowcase({ title, description, preview, code }: ComponentShowcaseProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide' : 'Show'} Code
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-6 border rounded-md bg-card">
          {preview}
        </div>
        {showCode && (
          <CodeBlock code={code} language="tsx" />
        )}
      </CardContent>
    </Card>
  )
}

export function ComponentGallery() {
  return (
    <div className="grid gap-8">
      {/* Buttons */}
      <ComponentShowcase
        title="Button"
        description="Clickable button component with multiple variants and sizes"
        preview={
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        }
        code={`<Button>Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      />

      {/* Cards */}
      <ComponentShowcase
        title="Card"
        description="Flexible container for content with header, content, and footer sections"
        preview={
          <div className="max-w-sm">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content area where you can place any content.</p>
              </CardContent>
            </Card>
          </div>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content area.</p>
  </CardContent>
</Card>`}
      />

      {/* Form Elements */}
      <ComponentShowcase
        title="Form Elements"
        description="Input fields, labels, and form controls"
        preview={
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </div>
        }
        code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" placeholder="Enter your email" />
</div>
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here" />
</div>
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      />

      {/* Badges */}
      <ComponentShowcase
        title="Badge"
        description="Small status indicators and labels"
        preview={
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        }
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      />

      {/* Progress */}
      <ComponentShowcase
        title="Progress"
        description="Progress indicator showing completion status"
        preview={
          <div className="max-w-sm space-y-2">
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </div>
        }
        code={`<Progress value={33} />
<Progress value={66} />
<Progress value={100} />`}
      />

      {/* Slider */}
      <ComponentShowcase
        title="Slider"
        description="Interactive slider for selecting a value from a range"
        preview={
          <div className="max-w-sm">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        }
        code={`<Slider defaultValue={[50]} max={100} step={1} />`}
      />

      {/* Avatar */}
      <ComponentShowcase
        title="Avatar"
        description="User profile picture with fallback initials"
        preview={
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      />

      {/* Tabs */}
      <ComponentShowcase
        title="Tabs"
        description="Tabbed interface for organizing content"
        preview={
          <div className="max-w-md">
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Content for tab 1</TabsContent>
              <TabsContent value="tab2">Content for tab 2</TabsContent>
              <TabsContent value="tab3">Content for tab 3</TabsContent>
            </Tabs>
          </div>
        }
        code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for tab 1</TabsContent>
  <TabsContent value="tab2">Content for tab 2</TabsContent>
</Tabs>`}
      />

      {/* Select */}
      <ComponentShowcase
        title="Select"
        description="Dropdown select component for choosing from options"
        preview={
          <div className="max-w-sm">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}
      />

      {/* Separator */}
      <ComponentShowcase
        title="Separator"
        description="Visual separator for dividing content"
        preview={
          <div>
            <p>Content above</p>
            <Separator className="my-4" />
            <p>Content below</p>
          </div>
        }
        code={`<p>Content above</p>
<Separator className="my-4" />
<p>Content below</p>`}
      />

      {/* Dialog */}
      <ComponentShowcase
        title="Dialog"
        description="Modal dialog for user interactions"
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description. You can put any content here.
                </DialogDescription>
              </DialogHeader>
              <p>Dialog content goes here.</p>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <p>Dialog content goes here.</p>
  </DialogContent>
</Dialog>`}
      />
    </div>
  )
}