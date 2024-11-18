import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

import Loading from './components/Loading.jsx';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const handleLoad = () => {
          setIsLoading(false);
      };

      // Listen for the page load event
      window.addEventListener('load', handleLoad);

      // Clean up the event listener
      return () => {
          window.removeEventListener('load', handleLoad);
      };
  }, []);

  return (
      <>
          {isLoading && <Loading />}
          <div className={`app-content ${isLoading ? 'hidden' : ''}`}>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/home' element={<HomePage/>}></Route>
          </Routes>
          </BrowserRouter>
          </div>
      </>
  );
};

export default App;