import React from 'react'
import { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from '/img/loading.gif'
import './App.css'

const Home = React.lazy(() => import('./pages/Home'))
const Signup = React.lazy(() => import('./components/newaccount/Signup'))
const Signin = React.lazy(() => import('./components/newaccount/Signin'))
const ResetPassword = React.lazy(() => import('./components/newaccount/ResetPassword'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

function App() {

  const location = useLocation()

  const cleanPath = location.pathname.replace(/\/$/, "");

  const currentPath = [
    "",
    "/",
    "/features",
    "/roadmap",
    "/faq",
    "/blog",
    "/contact",
    "/signin",
    "/signup",
    "/resetpassword"
  ].includes(cleanPath);



  return (
    <div className='app-container'>
      {currentPath && <Header />}
      <Suspense fallback={<div className='loading-container'><div className='loading'><img src={Loading} alt='loading image' /></div></div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      {currentPath && <Footer />}
    </div>
  )
}

export default App
