import { Route, Routes, useRoutes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PaymentExtrato from '../Pages/Pay/Extrato';
import Payment from '../Pages/Pay/Payment';
import PaymentSuccess from '../Pages/Pay/PaymentSuccess';
import PostoCombustiveis from '../Pages/PostoCombustiveis';
import Postos from '../Pages/Postos';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/postos' element={<Postos />} />
      <Route path='/posto/:id' element={<PostoCombustiveis />} />
      <Route path='/login' element={<Login />} />
      <Route path='/pagamento' element={<Payment />} />
      <Route path='/pagamento/concluido' element={<PaymentSuccess />} />
      <Route path='/pagamento/extrato' element={<PaymentExtrato />} />
    </Routes>
  );
}
