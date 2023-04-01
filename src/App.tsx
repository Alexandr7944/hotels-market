import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header/Header';
import { routes } from './router/routes';
import Navbar from './components/navbar/Navbar';
import Admin from './pages/admin/Admin';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          {routes.map((route, index) => 
            <Route key={index} path={route.path} element={<route.element/>}/>)} 
          <Route path="/*" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
