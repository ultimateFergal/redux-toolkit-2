import './App.css';
import Navbar from './Components/Navbar';
import CartContainer from './Components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './Components/Modal';

function App() {
  const { cartItems } = useSelector(store => store.cart);
  const { isOpen } = useSelector(store => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(calculateTotals());
  }, [cartItems])

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar/>
      <CartContainer />
    </main>
  );
}

export default App;
