import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import LiveChatWidget from './components/LiveChatWidget';
import ProductPage from './pages/ProductPage'; // Import the new product page

function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produk" element={<ProductPage />} />
          <Route path="/car/:carId" element={<CarDetailPage />} />
          <Route path="/article/:articleId" element={<ArticleDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
}

export default App;