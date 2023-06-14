import './App.css';
import React, { createContext, useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';

export const CountContext = createContext();

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <div>
          <Navbar />
        </div>

        <div>
          <Footer />
        </div>
      </CountContext.Provider>
    </>
  );
}

export default App;
