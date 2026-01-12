import React from 'react';
import { useSelector } from 'react-redux';
import { FiShoppingBag } from 'react-icons/fi';
import * as S from './Header.styles';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <S.HeaderWrapper>
      <S.Logo to="/">Vinyl Wave</S.Logo>
      <S.CartInfo to="/cart">
        <S.Price>{totalPrice} BYN</S.Price>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
           <FiShoppingBag /> 
           <span>{totalCount}</span>
        </div>
      </S.CartInfo>
    </S.HeaderWrapper>
  );
};

export default Header;