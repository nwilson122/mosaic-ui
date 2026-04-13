'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="outline"
        className="absolute right-2 top-2 h-8 w-8 p-0"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-3 w-3" />
        ) : (
          <Copy className="h-3 w-3" />
        )}
      </Button>
    </div>
  )
}