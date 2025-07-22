import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer.jsx';

function App() {

const handleDownloadResume = () => {
  console.log('Starting resume download...');
  
  // Create a link element
  const link = document.createElement('a');
  link.href = '/resume/resume.pdf'; // Path to your PDF in public folder
  link.download = 'resume.pdf'; // Name for downloaded file
  link.target = '_blank'; // Optional: open in new tab as fallback
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleDownloadAPK = () => {
  console.log('Starting APK download...');

  // Create a link element
  const link = document.createElement('a');
  link.href = '/apk/app-debug.apk'; // Path to your APK in public folder
  link.download = 'app-debug.apk'; // Name for downloaded file
  link.target = '_blank'; // Optional: open in new tab as fallback

  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
      <Header handleDownloadResume={handleDownloadResume} />

      <main className="min-h-screen">
        <Outlet context={{ handleDownloadResume, handleDownloadAPK }} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
