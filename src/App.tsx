import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import './scss/app.scss';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

// const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
// const FullPizza = lazy(
//   () => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'),
// );
// const NotFound = lazy(
//   () => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'),
// );

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div>Идет загрузка корзины...</div>,
});

const FullPizza = Loadable({
  loader: () => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'),
  loading: () => <div>Идет загрузка...</div>,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'),
  loading: () => <div>Идет загрузка...</div>,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
