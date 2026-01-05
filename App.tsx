
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import { AppProvider } from './context/AppContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Pages with Header/Footer */}
            <Route path="/" element={<><Header /><main className="flex-grow"><Home /></main><Footer /><FloatingAction /></>} />
            <Route path="/about" element={<><Header /><main className="flex-grow"><About /></main><Footer /><FloatingAction /></>} />
            <Route path="/menu" element={<><Header /><main className="flex-grow"><Menu /></main><Footer /><FloatingAction /></>} />
            <Route path="/gallery" element={<><Header /><main className="flex-grow"><Gallery /></main><Footer /><FloatingAction /></>} />
            <Route path="/contact" element={<><Header /><main className="flex-grow"><Contact /></main><Footer /><FloatingAction /></>} />
            
            {/* Admin Pages (No Header/Footer) */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
