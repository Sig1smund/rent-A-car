import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const CarsPage = lazy(() => import('./pages/CarsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CarsPage />} />
        <Route path="/favorites" element={<CarsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
