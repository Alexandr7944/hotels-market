import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { routes } from './router/routes';
import HomePage from './pages/homePage/HomePage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Navbar /> */}
        <Routes>
          {routes.map((route, index) => 
            <Route key={index} path={route.path} element={<route.element/>}/>)} 
          <Route path="/*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
