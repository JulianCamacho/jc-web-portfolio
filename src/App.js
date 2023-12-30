import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fade from '@mui/material/Fade';
import Navbar from './components/Home/Navbar';
import Home from "./components/Home/Homescreen"
import Loader from './components/Home/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, [])

  return (
    <div className='App'>
      <Fade in={!isLoading} timeout={1000}>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
        </div>
      </Fade>

      {isLoading && <Loader loading={isLoading}/>}
    </div>
  );
}

export default App;
