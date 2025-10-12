import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const App = () => {
  const location = useLocation()
  const [enter, setEnter] = useState(false)

  // toggle enter class on each route change to retrigger CSS animation
  useEffect(() => {
    setEnter(false)
    const t = setTimeout(() => setEnter(true), 10)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <>
      <Nav />
      <main className={`content-offset ${enter ? 'page-enter' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
