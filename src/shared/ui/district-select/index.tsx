import { useEffect, useRef, useState } from 'react'
import { DISTRITOS_MARICA } from '../../lib/constants'
import { cn } from '../../lib/utils'

type DistrictSelectProps = {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
}

export function DistrictSelect({
  value,
  onChange,
  className,
  placeholder = 'Qual distrito?',
}: DistrictSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLabel = DISTRITOS_MARICA.find((d) => d.value === value)?.label

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full text-left truncate focus:outline-none transition-colors cursor-pointer',
          !value ? 'text-text-subtle' : 'text-text-default',
          className,
        )}
      >
        {selectedLabel || placeholder}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-4 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in origin-top">
          <ul className="max-h-60 overflow-y-auto py-1 custom-scrollbar">
            {DISTRITOS_MARICA.map((distrito) => (
              <li key={distrito.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(distrito.value)
                    setIsOpen(false)
                  }}
                  className={cn(
                    'w-full text-left px-4 py-3 text-sm sm:text-base transition-colors cursor-pointer',
                    value === distrito.value
                      ? 'bg-primary-500/10 text-text-primary font-medium'
                      : 'text-text-default hover:bg-neutral-800/60 hover:text-text-primary',
                  )}
                >
                  {distrito.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
