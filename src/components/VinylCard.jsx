import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import * as S from './VinylCard.styles';

const VinylCard = ({ id, title, artist, price, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const finalId = id || Math.random().toString(); 
    dispatch(addItem({ id: finalId, title, price, imageUrl }));
  };

  return (
    <S.Card>
      <S.Image src={imageUrl} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Artist>{artist}</S.Artist>
      <S.Footer>
        <S.Price>{price} BYN</S.Price>
        <S.AddButton onClick={onClickAdd}>
           В корзину
        </S.AddButton>
      </S.Footer>
    </S.Card>
  );
};

export default VinylCard;