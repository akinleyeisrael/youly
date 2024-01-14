// providers.js (app directory)
'use client'

import { Provider } from 'jotai'
import { PropsWithChildren } from 'react'

export default function JotaiProviders({ children }: PropsWithChildren) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}