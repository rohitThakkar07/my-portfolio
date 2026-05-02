import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const AppLayout = () => {
  const location = useLocation()
  const [theme, setTheme] = useState(getInitialTheme)

  // Apply dark class to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/8" />
        <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/8 blur-3xl dark:bg-blue-500/6" />
        <div className="absolute -bottom-40 right-1/3 h-[400px] w-[400px] rounded-full bg-cyan-400/8 blur-3xl dark:bg-cyan-500/6" />
      </div>

      <SiteHeader theme={theme} setTheme={setTheme} />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pt-16"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <SiteFooter />
    </div>
  )
}

export default AppLayout
