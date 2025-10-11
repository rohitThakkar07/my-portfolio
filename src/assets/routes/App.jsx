import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>

    {/* <Portfolio/> */}
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
