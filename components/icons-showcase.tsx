'use client'

import { useState, useMemo } from 'react'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { CodeBlock } from './code-block'
import {
  Home, Search, User, Settings, Mail, Phone, Calendar, MapPin,
  Heart, Star, Bookmark, Share, Download, Upload, Edit, Delete,
  Plus, Minus, Check, X, ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  Menu, MoreVertical, MoreHorizontal, Bell, ShoppingCart, CreditCard,
  Lock, Unlock, Eye, EyeOff, Camera, Image, Video, Music,
  Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX,
  Wifi, WifiOff, Battery, BatteryLow, Sun, Moon, Cloud, CloudRain,
  Github, Twitter, Facebook, Instagram, Linkedin, Youtube,
  Code, Terminal, Database, Server, Globe, Link, Copy, Paste,
  File, Folder, FolderOpen, Save, Printer, Refresh, ArrowUp,
  ArrowDown, ArrowLeft, ArrowRight, ExternalLink, Clock, AlertCircle,
  CheckCircle, XCircle, Info, HelpCircle, Zap, Shield, Award,
  Target, TrendingUp, TrendingDown, Filter, Sort, Grid, List,
  Layers, Box, Package, Tag, Flag, Paperclip, Scissors, PaintBucket
} from 'lucide-react'

interface IconData {
  name: string
  component: React.ComponentType<any>
  keywords: string[]
}

const iconsList: IconData[] = [
  { name: 'Home', component: Home, keywords: ['home', 'house', 'main'] },
  { name: 'Search', component: Search, keywords: ['search', 'find', 'magnifier'] },
  { name: 'User', component: User, keywords: ['user', 'person', 'profile', 'account'] },
  { name: 'Settings', component: Settings, keywords: ['settings', 'config', 'gear', 'options'] },
  { name: 'Mail', component: Mail, keywords: ['mail', 'email', 'message', 'contact'] },
  { name: 'Phone', component: Phone, keywords: ['phone', 'call', 'contact'] },
  { name: 'Calendar', component: Calendar, keywords: ['calendar', 'date', 'schedule', 'time'] },
  { name: 'MapPin', component: MapPin, keywords: ['map', 'location', 'pin', 'place'] },
  { name: 'Heart', component: Heart, keywords: ['heart', 'love', 'favorite', 'like'] },
  { name: 'Star', component: Star, keywords: ['star', 'favorite', 'rating', 'bookmark'] },
  { name: 'Bookmark', component: Bookmark, keywords: ['bookmark', 'save', 'favorite'] },
  { name: 'Share', component: Share, keywords: ['share', 'export', 'send'] },
  { name: 'Download', component: Download, keywords: ['download', 'save', 'import'] },
  { name: 'Upload', component: Upload, keywords: ['upload', 'import', 'send'] },
  { name: 'Edit', component: Edit, keywords: ['edit', 'pencil', 'modify', 'change'] },
  { name: 'Delete', component: Delete, keywords: ['delete', 'remove', 'trash', 'bin'] },
  { name: 'Plus', component: Plus, keywords: ['plus', 'add', 'create', 'new'] },
  { name: 'Minus', component: Minus, keywords: ['minus', 'subtract', 'remove'] },
  { name: 'Check', component: Check, keywords: ['check', 'tick', 'confirm', 'done'] },
  { name: 'X', component: X, keywords: ['x', 'close', 'cancel', 'clear'] },
  { name: 'ChevronUp', component: ChevronUp, keywords: ['chevron', 'up', 'arrow'] },
  { name: 'ChevronDown', component: ChevronDown, keywords: ['chevron', 'down', 'arrow'] },
  { name: 'ChevronLeft', component: ChevronLeft, keywords: ['chevron', 'left', 'arrow'] },
  { name: 'ChevronRight', component: ChevronRight, keywords: ['chevron', 'right', 'arrow'] },
  { name: 'Menu', component: Menu, keywords: ['menu', 'hamburger', 'navigation'] },
  { name: 'MoreVertical', component: MoreVertical, keywords: ['more', 'dots', 'options', 'vertical'] },
  { name: 'MoreHorizontal', component: MoreHorizontal, keywords: ['more', 'dots', 'options', 'horizontal'] },
  { name: 'Bell', component: Bell, keywords: ['bell', 'notification', 'alert'] },
  { name: 'ShoppingCart', component: ShoppingCart, keywords: ['cart', 'shopping', 'store', 'buy'] },
  { name: 'CreditCard', component: CreditCard, keywords: ['credit', 'card', 'payment', 'money'] },
  { name: 'Lock', component: Lock, keywords: ['lock', 'secure', 'private', 'protected'] },
  { name: 'Unlock', component: Unlock, keywords: ['unlock', 'open', 'public'] },
  { name: 'Eye', component: Eye, keywords: ['eye', 'view', 'show', 'visible'] },
  { name: 'EyeOff', component: EyeOff, keywords: ['eye', 'hide', 'hidden', 'invisible'] },
  { name: 'Camera', component: Camera, keywords: ['camera', 'photo', 'picture', 'image'] },
  { name: 'Image', component: Image, keywords: ['image', 'picture', 'photo'] },
  { name: 'Video', component: Video, keywords: ['video', 'movie', 'film'] },
  { name: 'Music', component: Music, keywords: ['music', 'audio', 'sound'] },
  { name: 'Play', component: Play, keywords: ['play', 'start', 'begin'] },
  { name: 'Pause', component: Pause, keywords: ['pause', 'stop', 'wait'] },
  { name: 'Stop', component: Stop, keywords: ['stop', 'end', 'finish'] },
  { name: 'SkipForward', component: SkipForward, keywords: ['skip', 'forward', 'next'] },
  { name: 'SkipBack', component: SkipBack, keywords: ['skip', 'back', 'previous'] },
  { name: 'Volume2', component: Volume2, keywords: ['volume', 'sound', 'audio', 'speaker'] },
  { name: 'VolumeX', component: VolumeX, keywords: ['volume', 'mute', 'silent'] },
  { name: 'Wifi', component: Wifi, keywords: ['wifi', 'wireless', 'internet', 'connection'] },
  { name: 'WifiOff', component: WifiOff, keywords: ['wifi', 'offline', 'disconnected'] },
  { name: 'Battery', component: Battery, keywords: ['battery', 'power', 'charge'] },
  { name: 'BatteryLow', component: BatteryLow, keywords: ['battery', 'low', 'charge'] },
  { name: 'Sun', component: Sun, keywords: ['sun', 'light', 'day', 'bright'] },
  { name: 'Moon', component: Moon, keywords: ['moon', 'dark', 'night'] },
  { name: 'Cloud', component: Cloud, keywords: ['cloud', 'weather', 'storage'] },
  { name: 'CloudRain', component: CloudRain, keywords: ['cloud', 'rain', 'weather'] },
  { name: 'Github', component: Github, keywords: ['github', 'git', 'code', 'repository'] },
  { name: 'Twitter', component: Twitter, keywords: ['twitter', 'social', 'tweet'] },
  { name: 'Facebook', component: Facebook, keywords: ['facebook', 'social'] },
  { name: 'Instagram', component: Instagram, keywords: ['instagram', 'social', 'photo'] },
  { name: 'Linkedin', component: Linkedin, keywords: ['linkedin', 'social', 'professional'] },
  { name: 'Youtube', component: Youtube, keywords: ['youtube', 'video', 'social'] },
  { name: 'Code', component: Code, keywords: ['code', 'programming', 'development'] },
  { name: 'Terminal', component: Terminal, keywords: ['terminal', 'command', 'console'] },
  { name: 'Database', component: Database, keywords: ['database', 'data', 'storage'] },
  { name: 'Server', component: Server, keywords: ['server', 'hosting', 'cloud'] },
  { name: 'Globe', component: Globe, keywords: ['globe', 'world', 'internet', 'web'] },
  { name: 'Link', component: Link, keywords: ['link', 'url', 'chain'] },
  { name: 'Copy', component: Copy, keywords: ['copy', 'duplicate', 'clone'] },
  { name: 'Paste', component: Paste, keywords: ['paste', 'clipboard'] },
  { name: 'File', component: File, keywords: ['file', 'document'] },
  { name: 'Folder', component: Folder, keywords: ['folder', 'directory'] },
  { name: 'FolderOpen', component: FolderOpen, keywords: ['folder', 'open', 'directory'] },
  { name: 'Save', component: Save, keywords: ['save', 'disk', 'store'] },
  { name: 'Printer', component: Printer, keywords: ['printer', 'print'] },
  { name: 'Refresh', component: Refresh, keywords: ['refresh', 'reload', 'update'] },
  { name: 'ArrowUp', component: ArrowUp, keywords: ['arrow', 'up', 'direction'] },
  { name: 'ArrowDown', component: ArrowDown, keywords: ['arrow', 'down', 'direction'] },
  { name: 'ArrowLeft', component: ArrowLeft, keywords: ['arrow', 'left', 'direction'] },
  { name: 'ArrowRight', component: ArrowRight, keywords: ['arrow', 'right', 'direction'] },
  { name: 'ExternalLink', component: ExternalLink, keywords: ['external', 'link', 'open', 'new'] },
  { name: 'Clock', component: Clock, keywords: ['clock', 'time', 'schedule'] },
  { name: 'AlertCircle', component: AlertCircle, keywords: ['alert', 'warning', 'error'] },
  { name: 'CheckCircle', component: CheckCircle, keywords: ['check', 'success', 'done'] },
  { name: 'XCircle', component: XCircle, keywords: ['x', 'error', 'close', 'cancel'] },
  { name: 'Info', component: Info, keywords: ['info', 'information', 'help'] },
  { name: 'HelpCircle', component: HelpCircle, keywords: ['help', 'question', 'support'] },
  { name: 'Zap', component: Zap, keywords: ['zap', 'lightning', 'fast', 'quick'] },
  { name: 'Shield', component: Shield, keywords: ['shield', 'security', 'protection'] },
  { name: 'Award', component: Award, keywords: ['award', 'trophy', 'achievement'] },
  { name: 'Target', component: Target, keywords: ['target', 'goal', 'aim'] },
  { name: 'TrendingUp', component: TrendingUp, keywords: ['trending', 'up', 'growth'] },
  { name: 'TrendingDown', component: TrendingDown, keywords: ['trending', 'down', 'decline'] },
  { name: 'Filter', component: Filter, keywords: ['filter', 'search', 'sort'] },
  { name: 'Sort', component: Sort, keywords: ['sort', 'order', 'arrange'] },
  { name: 'Grid', component: Grid, keywords: ['grid', 'layout', 'view'] },
  { name: 'List', component: List, keywords: ['list', 'items', 'view'] },
  { name: 'Layers', component: Layers, keywords: ['layers', 'stack', 'group'] },
  { name: 'Box', component: Box, keywords: ['box', 'package', 'container'] },
  { name: 'Package', component: Package, keywords: ['package', 'box', 'delivery'] },
  { name: 'Tag', component: Tag, keywords: ['tag', 'label', 'category'] },
  { name: 'Flag', component: Flag, keywords: ['flag', 'marker', 'important'] },
  { name: 'Paperclip', component: Paperclip, keywords: ['paperclip', 'attach', 'file'] },
  { name: 'Scissors', component: Scissors, keywords: ['scissors', 'cut', 'trim'] },
  { name: 'PaintBucket', component: PaintBucket, keywords: ['paint', 'color', 'fill'] },
]

export function IconsShowcase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null)

  const filteredIcons = useMemo(() => {
    if (!searchTerm) return iconsList

    return iconsList.filter(icon =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [searchTerm])

  const copyIconCode = (iconName: string) => {
    const code = `import { ${iconName} } from 'lucide-react'

<${iconName} className="h-4 w-4" />`
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <Input
            placeholder="Search icons... (e.g., home, user, settings)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <Badge variant="outline">
          {filteredIcons.length} icon{filteredIcons.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      {/* Selected Icon Detail */}
      {selectedIcon && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-lg">
                <selectedIcon.component className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{selectedIcon.name}</h3>
                <p className="text-muted-foreground">
                  Keywords: {selectedIcon.keywords.join(', ')}
                </p>
                <Button
                  onClick={() => copyIconCode(selectedIcon.name)}
                  className="mt-2"
                  size="sm"
                >
                  Copy Code
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <CodeBlock
                code={`import { ${selectedIcon.name} } from 'lucide-react'

<${selectedIcon.name} className="h-4 w-4" />`}
                language="tsx"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {filteredIcons.map((icon) => (
          <Card
            key={icon.name}
            className={`cursor-pointer transition-colors hover:bg-accent ${
              selectedIcon?.name === icon.name ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedIcon(icon)}
          >
            <CardContent className="p-4 flex flex-col items-center space-y-2">
              <icon.component className="h-6 w-6" />
              <span className="text-xs text-center font-medium truncate w-full">
                {icon.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold">No icons found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  )
}