import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Payment from '../Pages/Pay';
import PostoCombustiveis from '../Pages/PostoCombustiveis';
import Postos from '../Pages/Postos';

export default function MainRoutes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/postos', element: <Postos /> },
    { path: '/posto/:id', element: <PostoCombustiveis /> },
    { path: '/login', element: <Login /> },
    { path: '/pagamento', element: <Payment /> },
  ]);
}
