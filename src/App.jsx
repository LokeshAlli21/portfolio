import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      {/* <Header /> */}

      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
