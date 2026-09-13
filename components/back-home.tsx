import { ArrowLeft } from 'lucide-react'

export function BackHome() {
  return (
    <a
      href="/"
      className="fixed left-4 top-24 z-30 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-background/85 px-4 text-xs font-medium text-muted-foreground backdrop-blur-md transition hover:border-white/25 hover:text-white sm:text-sm lg:relative lg:top-auto lg:left-auto lg:z-auto lg:my-0 lg:inline-flex lg:w-fit lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:hover:border-primary/25 lg:hover:text-primary"
    >
      <ArrowLeft className="size-3.5" />
      Back to Last Bus Stop
    </a>
  )
}