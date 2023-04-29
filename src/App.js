import './App.css';
import Navbar from './Components/Navbar';
import CartContainer from './Components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './Components/Modal';

function App() {
  const { cartItems, isLoading } = useSelector(store => store.cart);
  const { isOpen } = useSelector(store => store.modal);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getCartItems())
  }, [])

  useEffect(() => {
      dispatch(calculateTotals());
  }, [cartItems])
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar/>
      <CartContainer />
    </main>
  );
}

export default App;
