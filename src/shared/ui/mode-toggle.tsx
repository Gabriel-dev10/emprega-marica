import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../providers/theme-provider'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-1 border border-neutral-200 dark:border-neutral-800 p-1 rounded-full bg-white dark:bg-neutral-950 shadow-sm">
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`p-2 rounded-full transition-all ${
            theme === 'light'
              ? 'bg-neutral-100 text-neutral-900 shadow-sm ring-1 ring-neutral-200'
              : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
          }`}
          aria-label="Light mode"
        >
          <Sun className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-full transition-all ${
            theme === 'dark'
              ? 'bg-neutral-800 text-white shadow-sm ring-1 ring-neutral-700'
              : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
          }`}
          aria-label="Dark mode"
        >
          <Moon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
