
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/home/Home'
import About from './component/about/About'
import Portfolio from './component/portofilo/Portfolio'
import Contact from './component/contact/Contact'
import Notfound from './component/notfound/Notfound'

export default function App() {
  let routes= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home></Home>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>}
    ]}
  ])
  return (
    <>
    <RouterProvider router={routes}/>

    </>
  )
}
