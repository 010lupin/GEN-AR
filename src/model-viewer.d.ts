import type React from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          ar?: boolean
          'camera-controls'?: boolean
          'shadow-intensity'?: string
          exposure?: string
        },
        HTMLElement
      >
    }
  }
}
