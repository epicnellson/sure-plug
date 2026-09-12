'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { RequestModal } from './RequestModal'

interface RequestContextValue {
  openRequest: () => void
}

const RequestContext = createContext<RequestContextValue | null>(null)

export function RequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openRequest = useCallback(() => setOpen(true), [])
  const closeRequest = useCallback(() => setOpen(false), [])

  return (
    <RequestContext.Provider value={{ openRequest }}>
      {children}
      <RequestModal open={open} onClose={closeRequest} />
    </RequestContext.Provider>
  )
}

export function useRequest() {
  const ctx = useContext(RequestContext)
  if (!ctx) throw new Error('useRequest must be used within RequestProvider')
  return ctx
}