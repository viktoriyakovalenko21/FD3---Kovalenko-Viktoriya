import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FiTrash2, FiArrowLeft, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';

import { addItem, minusItem, removeItem, clearCart } from '../redux/slices/cartSlice';
import * as S from './Cart.styles'; 

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const [isOrdering, setIsOrdering] = React.useState(false);

  const onClickClear = () => { if (window.confirm('Очистить корзину?')) dispatch(clearCart()); };

  const onClickOrder = async () => {
    try {
      setIsOrdering(true);
      const { data } = await axios.post('https://69603bb5e7aa517cb7959649.mockapi.io/orders', {
        items, totalPrice, date: new Date().toLocaleString()
      });
      alert(`Заказ №${data.id} успешно оформлен!`);
      dispatch(clearCart());
      navigate('/');
    } catch (error) {
      alert('Ошибка при заказе');
    } finally {
      setIsOrdering(false);
    }
  };

  if (!totalCount) return (
    <S.EmptyState>
      <FiShoppingBag size={80} color="#333" />
      <h2>Корзина пуста</h2>
      <p>Вернитесь в каталог, чтобы найти свою пластинку.</p>
      <S.PayButton as={Link} to="/" style={{ padding: '15px 30px', fontSize: '1rem', textDecoration: 'none' }}>В каталог</S.PayButton>
    </S.EmptyState>
  );

  return (
    <S.PageContainer>
      <S.HeaderBlock>
        <S.Title><FiShoppingBag style={{ marginRight: 10 }} /> Корзина <span>({totalCount})</span></S.Title>
        <S.ClearButton onClick={onClickClear}><FiTrash2 /> Очистить</S.ClearButton>
      </S.HeaderBlock>

      <div>
        {items.map((item) => (
          <S.CartItem key={item.id}>
            <S.ItemImg src={item.imageUrl} alt="Cover" />
            <S.ItemInfo>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemArtist>{item.artist}</S.ItemArtist>
            </S.ItemInfo>
            <S.CountGroup>
              <S.CountButton disabled={item.count === 1} onClick={() => dispatch(minusItem(item.id))}><FiMinus /></S.CountButton>
              <b style={{ width: 30, textAlign: 'center', fontSize: '1.2rem' }}>{item.count}</b>
              <S.CountButton onClick={() => dispatch(addItem({ id: item.id }))}><FiPlus /></S.CountButton>
            </S.CountGroup>
            <S.ItemPrice>{item.price * item.count} BYN</S.ItemPrice>
            <S.RemoveButton onClick={() => dispatch(removeItem(item.id))}><FiTrash2 size={24} /></S.RemoveButton>
          </S.CartItem>
        ))}
      </div>

      <S.BottomPanel>
        <S.BackLink to="/"><FiArrowLeft /> Назад в магазин</S.BackLink>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', alignItems: 'center' }}>
           <S.TotalSum>Итого к оплате: <div>{totalPrice} BYN</div></S.TotalSum>
           <S.PayButton disabled={isOrdering} onClick={onClickOrder}>{isOrdering ? 'Отправка...' : 'Оформить заказ'}</S.PayButton>
        </div>
      </S.BottomPanel>
    </S.PageContainer>
  );
};

export default Cart;