import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchParts from './pages/SearchParts';
import Product from './pages/Product';
import Diagnostics from './pages/Diagnostics';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { useState, useEffect } from 'react';

function App() {

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Сохраняем тему в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/profilum/" element={<Home />} />
            <Route path="/profilum/search-parts" element={<SearchParts />} />
            <Route path="/profilum/product/:id" element={<Product />} />
            <Route path="/profilum/diagnostics" element={<Diagnostics />} />
            <Route path="/profilum/booking" element={<Booking />} />
            <Route path="/profilum/profile" element={<Profile />} />
            <Route path="/profilum/services" element={<Services />} />
            <Route path="/profilum/about" element={<About />} />
            <Route path="/profilum/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
