import './App.css';
import React,{useState} from 'react';
import Header from './components/Layout/Header';
import Product from './components/Products/Product';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Store/CartProvider';
function App() {
  const[shownModal,setShownModal]= useState(false);
  const ShowCartModal =()=>{
    setShownModal(true);
  }
  const HideCartModal =()=>{
    setShownModal(false);
  }
  return (
    <CartContextProvider>
      {shownModal && <Cart onClose={HideCartModal} />}
      <Header onShowCart={ShowCartModal} />
      <main>
      <Product />
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
