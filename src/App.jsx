import React, { useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; 

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

function App() {
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      
      if (items.length > 0) {
        event.preventDefault();
        event.returnValue = ''; 
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [items]); 

  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;