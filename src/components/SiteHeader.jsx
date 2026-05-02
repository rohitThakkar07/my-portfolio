import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ButtonLink from './ButtonLink'
import { profile } from '../data/portfolioData'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
]

const SiteHeader = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
   <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="group flex shrink-0 items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 text-sm font-bold text-white shadow-md shadow-teal-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-500/50">
            RT
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white">Rohit Thakkar</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Fullstack Developer
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                  `relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 group/nav ${
                    isActive
                      ? 'text-teal-600 dark:text-teal-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`
              }
            >
              {({ isActive }) => (
  <>
    <span className="relative z-10">{item.label}</span>

    {/* Hover background — always present, fades in on hover */}
    <motion.span
      className="absolute inset-0 -z-10 rounded-lg bg-slate-100 opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100 dark:bg-white/8"
    />

    {/* Active indicator pill */}
    {isActive && (
      <motion.span
        layoutId="nav-pill"
        className="absolute inset-0 -z-10 rounded-lg bg-teal-50 dark:bg-teal-500/10"
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    )}

        {/* Animated underline on hover + active */}
        <span className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 ${
          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover/nav:opacity-60 group-hover/nav:scale-x-100'
        }`} />
      </>
    )}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ButtonLink
            href={profile.resumePdf}
            download
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Download CV
          </ButtonLink>

          {/* Theme Toggle */}
          <motion.button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-sm transition-all hover:border-teal-300 hover:text-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-teal-500/50 dark:hover:text-teal-400"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark'
                  ? <Sun size={18} strokeWidth={2} />
                  : <Moon size={18} strokeWidth={2} />
                }
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 lg:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'x' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-slate-950/95"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 flex gap-2 border-t border-slate-100 pt-4 dark:border-white/5">
                <ButtonLink href={profile.resumePdf} download variant="primary" size="sm" className="flex-1">
                  Download CV
                </ButtonLink>
                <ButtonLink href={profile.email} variant="secondary" size="sm" className="flex-1">
                  Contact Me
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default SiteHeader
