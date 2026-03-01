import type { ButtonProps } from '../../types'

export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none rounded-lg'

  const variants = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-400 focus:ring-primary-500 shadow-lg shadow-primary-500/20',
    secondary:
      'bg-white/10 backdrop-blur-sm text-white border border-white/10 hover:bg-white/20 focus:ring-primary-500',
    outline:
      'bg-transparent border border-primary-500/40 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400',
    ghost:
      'bg-transparent text-neutral-400 hover:text-white hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const widthStyle = fullWidth ? 'w-full' : ''

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
