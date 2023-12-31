import { Routes, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Welcome />} />
    </Routes>
  );
};

export default Home;
