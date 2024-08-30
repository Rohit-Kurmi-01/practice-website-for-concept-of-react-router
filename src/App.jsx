import { useState } from 'react'

import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
