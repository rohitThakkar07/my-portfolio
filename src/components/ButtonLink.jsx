import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25 hover:from-teal-400 hover:to-teal-500 hover:-translate-y-0.5 hover:shadow-teal-500/40 active:translate-y-0 dark:from-teal-400 dark:to-teal-500 dark:text-slate-950 dark:shadow-teal-400/20 dark:hover:from-teal-300 dark:hover:to-teal-400',
  secondary:
    'border border-slate-200 bg-white/70 text-slate-800 backdrop-blur hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-teal-400 dark:hover:text-teal-300 dark:hover:bg-white/10',
  ghost:
    'text-slate-600 hover:text-teal-600 hover:bg-teal-50 dark:text-slate-300 dark:hover:text-teal-300 dark:hover:bg-teal-400/10',
  danger:
    'bg-red-500 text-white hover:bg-red-400 hover:-translate-y-0.5 shadow-lg shadow-red-500/20',
}

const sizes = {
  sm: 'px-4 py-2 text-xs gap-1.5 rounded-full',
  md: 'px-5 py-2.5 text-sm gap-2 rounded-full',
  lg: 'px-7 py-3.5 text-sm gap-2.5 rounded-full',
}

const ButtonLink = ({
  children,
  className = '',
  download = false,
  href,
  onClick,
  size = 'md',
  target,
  to,
  variant = 'primary',
  disabled = false,
}) => {
  const classes = [
    'inline-flex items-center justify-center font-semibold transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
    'dark:focus-visible:ring-teal-400',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (onClick && !href) {
    return (
      <button type="button" onClick={onClick} className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      download={download}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export default ButtonLink
