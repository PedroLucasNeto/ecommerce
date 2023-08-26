import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/'>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='notFound' element={<NotFound />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;