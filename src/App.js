import './App.css';
import Header from './components/Layers/Header';
import Meals from './components/Meal/Meals'
import Cart from './components/Cart/Cart';
import { useState } from 'react'
import CartProvider from './components/store/CartProvider';

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
      setCartIsShown(true)
  }
  const hideCartHandler = () => {
      setCartIsShown(false)
  }
  return(
    <CartProvider>
      {cartIsShown && <Cart  onClose={hideCartHandler} />}
      <Header  onClick={showCartHandler} />  
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}
export default App;
