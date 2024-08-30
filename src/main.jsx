import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github, { loderData } from './component/Github/Github.jsx'

// const router =createBrowserRouter([
//   {
//     path: '/',
//     element : <App />,
//     children:[
//       {
//         path :'',
//         element: <Home />,
//       },
//       {
//         path: 'About',
//         element:<About />
//       },
//       {
//         path: 'Contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/user/:userId' element={<User/>}/>
      <Route 
      loader ={loderData}
      path='/Github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
