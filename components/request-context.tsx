'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { RequestModal } from './RequestModal'

interface RequestContextValue {
  openRequest: (service?: string) => void
}

const RequestContext = createContext<RequestContextValue | null>(null)

export function RequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [presetService, setPresetService] = useState<string | undefined>(undefined)

  const openRequest = useCallback((service?: string) => {
    setPresetService(service)
    setOpen(true)
  }, [])
  const closeRequest = useCallback(() => setOpen(false), [])

  return (
    <RequestContext.Provider value={{ openRequest }}>
      {children}
      <RequestModal open={open} onClose={closeRequest} presetService={presetService} />
    </RequestContext.Provider>
  )
}

export function useRequest() {
  const ctx = useContext(RequestContext)
  if (!ctx) throw new Error('useRequest must be used within RequestProvider')
  return ctx
}