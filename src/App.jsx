import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// Pages
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus';
import Details from './pages/bus/Details';
import Checkout from './pages/checkout/Checkout';
import AboutUs from './pages/about/About';
import Services from './pages/services/Services';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/bus' element={<Bus />} />
            <Route path='/bus/bus-details' element={<Details />} />
            <Route path='/bus/bus-details/checkout' element={<Checkout />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/services' element={<Services />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
