import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import HomePage from '../pages/homePage/HomePage'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, index) => 
          <Route key={index} path={route.path} element={<route.element/>}/>)} 
        <Route path="/*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppRouter