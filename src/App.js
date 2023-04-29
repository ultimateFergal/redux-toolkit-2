import './App.css';
import Navbar from './Components/Navbar';
import CartContainer from './Components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])
  return (
    <main>
      <Navbar/>
      <CartContainer />
    </main>
  );
}

export default App;
