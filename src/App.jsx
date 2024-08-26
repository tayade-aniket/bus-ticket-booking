import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// Pages
import HomeContainer from './pages/home_container/HomeContainer';

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
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
