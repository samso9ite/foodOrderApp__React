import './App.css';
import { Fragment } from 'react';
import Header from './components/Layers/Header';
import Meals from './components/Meal/Meals'
import Cart from './components/Cart/Cart';

const App = () => {
  return(
    <Fragment>
      <Cart />
      <Header />  
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}
export default App;
