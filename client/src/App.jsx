import React from 'react'
import { BookingPage, Home, Login, ProviderLogin, ProviderRegister, Register, SignUp } from './pages'
import { ConfirmPage, CustomerBookingDetail, ServiceProvider, } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage'
import Ticket from './components/Ticket/Ticket'
const App = () => {
  return (
    <div className='border h-full max-w-auto relative'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/register' element={<ProviderRegister />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/service' element={<ServiceProvider />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/custbookingdetail' element={<CustomerBookingDetail />} />
          <Route path='/confirm' element={<ConfirmPage />} />
          <Route path='/ticket-history' element={<Ticket />} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  )
}

export default App


